<template>
  <div class="sidebar">
    <ul>
      <sidebar-item v-for="(module, index) in modules" :module="module" :moduleIndex="index" :key="index"></sidebar-item>
    </ul>
    <div class="sidebar__fill"></div>
  </div>
</template>

<script>
import moduleData from '@/json-data/modules.json';
import SidebarItem from '@/js/components/SidebarItem';

export default {

  name: 'Sidebar',
  components: {
    SidebarItem,
  },
  data() {
    return {
      isOpen: [],
      modules: moduleData,
    };
  },
  computed: {},
  methods: {
    widthProgressBar() {
      if (this.completedChapters().exists && this.numberOfChapters().exists) {
        const withPercentage = this.completedChapters / this.numberOfChapters() * 100;
        console.log(`withPercentage: ${withPercentage}`);
        return `${withPercentage}%`;
      }
        return '25%';
    },
    completedChapters() {
      return '2';
    },
    numberOfChapters(moduleID) {
      return moduleData[moduleID].chapters.length;
    },
    doneChapters(linkModuleID, linkChapterID) {
      const currentmoduleid = parseInt(this.$route.params.moduleid);
      const currentChapterid = parseInt(this.$route.params.chapterid);
      if (linkModuleID < currentmoduleid) {
        return 'done-chapter ';
      } if (linkModuleID === currentmoduleid && linkChapterID < currentChapterid) {
        return 'done-chapter';
      }
        return 'next-chapter';
    },
    doneModule(linkModuleID) {
      const currentmoduleid = parseInt(this.$route.params.moduleid);
      const moduleDone = currentmoduleid - 1;
      const moduleNext = currentmoduleid + 1;
      if (linkModuleID === moduleDone) {
        return 'module__done ' + 'module__progress';
      } if (linkModuleID < moduleDone) {
        return 'module__before__done ' + 'module__progress';
      } if (linkModuleID === moduleNext) {
        return 'module__next ' + 'module__progress';
      } if (linkModuleID > moduleNext) {
        return 'module__after__next ' + 'module__progress';
      }
        return '' + 'module__progress';
    },
    openClose(moduleID) {
      if (this.isOpen.includes(moduleID)) {
        this.isOpen = this.isOpen.filter((x) => x != moduleID);
      } else {
        this.isOpen.push(moduleID);
      }
    },

  },
};
</script>
