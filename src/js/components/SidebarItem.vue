<template>
  <li class="module">
    <div class="module__container">
      <!--progressbar-->
      <router-link :to="{ name: 'Onboarding', params: { moduleid: moduleIndex, chapterid: 0 }}"
                   active-class="active-module" :class="doneModule()">
        <div class="module__title">
          {{ module.name }}
        </div>
        <div class="module__progressbar">
          <div class="module__progressbar__fill module__progressbar__fill__bigger"
               :style="{width: `${progress}%`}"></div>
        </div>
        <p class="module__progress__status">
          {{ completedChapters.length }} / {{ module.chapters.length }} voltooid
        </p>
        <a @click="toggleOpen">
            <svg :class="{'toggle-down': open, 'toggle-up': !open}" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1L6 6L1 1" stroke="black" stroke-width="2"/>
            </svg>
        </a>
      </router-link>

      <!--Hoofdstukken-->
      <transition name="list">
        <ul class="module__chapters" v-show="open">
        <div class="module__chapters__space-div"></div>
          <li v-for="(chapter, index) in module.chapters" :key="chapter.id">
            <router-link :to="{ name: 'Onboarding', params: { moduleid: moduleIndex, chapterid: index }}" active-class="active-chapter" :class="doneChapters(index)">
              <span class="module__chapters__status__done__circle"></span>
              {{ chapter.chapterTitle }}
            </router-link>
          </li>
          <div class="module__chapters__space-div"></div>
        </ul>

      </transition>
    </div>
  </li>
</template>

<script>
import contentData from '@/json-data/modules.json';

export default {
  name: 'SidebarItem',
  props: {
    module: {
      type: Object,
      default: () => {
      },
    },
    moduleIndex: Number,
  },
  data() {
    return {
      open: false,
      completedTasks: [],
    };
  },
  computed: {
    progress() {
      return (this.completedChapters.length / this.module.chapters.length) * 100;
    },
    checked() {
      if (this.$store.getters.completedTaskIds.includes(this.task.id)) {
        this.completedTasks.push(this.task.id);
      }
    },
    completedChapters() {
      const {chapters} = this.module;

      const completedChapters = [];
      chapters.forEach((chapter) => {
        const chapterTasks = chapter.tasks;
        for (let i = 0; i < chapterTasks.length; i += 1) {
          if (!this.$store.getters.completedTaskIds.includes(chapterTasks[i].id)) {
            return;
          }
        }
        completedChapters.push(chapter);
      });
      return completedChapters;
    },
    checkIfChapterDone() {
      if (this.module.chapters[this.$route.params.chapterid].tasks.length === this.completedTasks.length) {
        this.completedChapters + 1;
      }
    },

  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    doneModule() {
      const currentmoduleid = parseInt(this.$route.params.moduleid);
      const moduleDone = currentmoduleid - 1;
      const moduleNext = currentmoduleid + 1;
      if (this.moduleIndex === moduleDone) {
        return 'module__done ' + 'module__progress';
      }
      if (this.moduleIndex < moduleDone) {
        return 'module__before__done ' + 'module__progress';
      }
      if (this.moduleIndex === moduleNext) {
        return 'module__next ' + 'module__progress';
      }
      if (this.moduleIndex > moduleNext) {
        return 'module__after__next ' + 'module__progress';
      }
      return '' + 'module__progress';
    },
    doneChapters(linkChapterID) {
      const currentmoduleid = parseInt(this.$route.params.moduleid);
      const currentChapterid = parseInt(this.$route.params.chapterid);
      if (this.moduleIndex < currentmoduleid) {
        return 'done-chapter ';
      }
      if (this.moduleIndex === currentmoduleid && linkChapterID < currentChapterid) {
        return 'done-chapter';
      }
      return 'next-chapter';
    },
  },
};
</script>

<style scoped>

</style>
