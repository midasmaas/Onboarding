<template>
  <li>
  <div class="dashboardModule">
    <div class="dashboardImage">
      <img src="static/images/profilepicture.png"
           alt="Hier komt een afbeelding die iets te maken heeft met het hoofdstuk">
    </div>
    <div class="dashboardModuleProgressDiv">
      <div>
        <div id="moduleProgress" class="module__progressbar">
          <div class="module__progressbar__fill" :style="{width: `${progress}%`}"></div>
        </div>
        <p class="module__progress__status">
          {{ completedChapters.length }} / {{ dashboardSingleModuleProp.chapters.length }} voltooid
        </p>
      </div>
    </div>
    <div class="dashboardTitleDiv">
      <h3 class="dashboardTitle"> {{dashboardSingleModuleProp.name}} </h3>
    </div>
    <div class="dashboardCopy">
      <p> {{dashboardSingleModuleProp.intro}} </p>
    </div>
    <div class="dashboardModuleButton non-selectable">
      <router-link class="dashboardModuleButtonPositioningDiv" :to="{ name: 'Onboarding', params: { moduleid: dashboardModuleIndex, chapterid: 0 }}">
        <p>
          Start
        </p>
          <!--Nog niet de juiste svg-->
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
      </router-link>
    </div>
  </div>
  </li>
</template>

<script>
import json from '@/json-data/modules.json';

export default {
  name: 'DashboardModule',
  props: {
    dashboardSingleModuleProp: {
      type: Object,
      default: () => {
      },
    },
    dashboardModuleIndex: Number,
  },
  data() {
    return {
      completedTasks: [],
    };
  },
  computed: {
    progress() {
      return (this.completedChapters.length / this.dashboardSingleModuleProp.chapters.length) * 100;
    },
    checked() {
      if (this.$store.getters.completedTaskIds.includes(this.task.id)) {
        this.completedTasks.push(this.task.id);
      }
    },
    completedChapters() {
      const { chapters } = this.dashboardSingleModuleProp;

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
      if (this.dashboardSingleModuleProp.chapters[this.$route.params.chapterid].tasks.length === this.completedTasks.length) {
        this.completedChapters + 1;
      }
    },
  },
};
</script>

<style scoped>

</style>
