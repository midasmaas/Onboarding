<template>
  <div>
    <!--Navigatiebalk zijkant-->
    <Sidebar></Sidebar>
    <!--Content voor grid-->
    <div class="module-content">
      <div class="module-content__container">
        <!--Navigatieknoppen voor hoofdstukken-->
        <chapter-selector></chapter-selector>
        <transition
            name="fade"
        >
          <div v-if="pagaAnim" class="module-content__data">
            <!--Contentblocken render-element-->
            <BlockBuilder :dataForBuilder="textData"></BlockBuilder>

            <!--Taken-elementen-->
            <h2> De opdracht </h2>
            <div v-if="textData.tasks" class="checkboxes">
              <task v-for="(checkbox, key) in textData.tasks" :task="checkbox" :key="key"></task>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>

</template>

<script>
// Module imports
import ChapterSelector from '@/js/components/ChapterSelector';
import Sidebar from '@/js/components/Sidebar';
import Task from '@/js/components/Task';
import BlockBuilder from '@/js/components/BlockBuilder';

// Data import
import contentData from '@/json-data/modules.json';

export default {
  name: 'Dashboard',
  data() {
    return {
      mediaType: null,
      pagaAnim: true,
    };
  },
  methods: {
    increment() {
      this.$store.dispatch('incrementCount');
    },
    markTaskAsCompleted(event) {
      console.log(event);
    },

    pageTransition() {
      this.pagaAnim = false;
      setTimeout(() => this.pagaAnim = true, 100);
    },
  },
  computed: {
    textData() {
      return contentData[this.$route.params.moduleid ?? 0].chapters[this.$route.params.chapterid ?? 0];
    },
    checkboxes() {
      const tasks = [];
      for (let i = 0; i < this.textData.tasks.length; i += 1) {
        tasks.push(false);
      }
      return tasks;
    },
  },
  components: {
    Sidebar,
    BlockBuilder,
    ChapterSelector,
    Task,
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.pagaAnim = false;
        setTimeout(() => this.pagaAnim = true, 100);
      }
    },
  },
};
</script>
