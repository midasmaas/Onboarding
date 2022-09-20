<template>
<div class="chapter-selector">
  <div class="chapter-selector__container non-selectable">
    <a class="chapter-selector__button" v-if="isNotFirstChapter" @click="back">
      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.86528 5.47456L5.38442 7.949L4.31431 9.00012L0.535179 5.28805L0.000122654 4.76249L0.535179 4.23693L4.31431 0.524858L5.38442 1.57598L2.94251 3.97456L11.1289 3.97456L11.1289 5.47456L2.86528 5.47456Z" fill="#121212"/>
      </svg>
      <div class="chapter-selector__btn-title">
        {{ this.buttonTextPrevChapter }}
      </div>

      <div class="chapter-selector__btn-title__small">
        Vorige
      </div>
    </a>

    <a class="chapter-selector__button" v-if="isNotLastChapter" @click="forward">
      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.26364 3.52557L5.74448 1.05112L6.8146 0L10.5937 3.71207L11.1288 4.23763L10.5937 4.76319L6.8146 8.47526L5.74448 7.42414L8.18638 5.02557H0V3.52557H8.26364Z" fill="#121212"/>
      </svg>
      <div class="chapter-selector__btn-title">
        {{ this.buttonTextNextChapter }}
      </div>

      <div class="chapter-selector__btn-title__small">
        Volgende
      </div>
    </a>
  </div>
</div>
</template>

<script>
import chapterData from '@/json-data/modules.json';

export default {
  name: 'ChapterSelector',
  data() {
    return {
      buttonTextPrevChapterData: chapterData[this.$route.params.moduleid].chapters[this.$route.params.chapterid].chapterTitle,
    };
  },
  computed: {
    isNotFirstChapter() {
      const currentmoduleid = parseInt(this.$route.params.moduleid);
      const currentChapterid = parseInt(this.$route.params.chapterid);
      return currentmoduleid > 0 || currentChapterid > 0;
    },
    buttonTextPrevChapter() {
      const prevModuleid = parseInt(this.$route.params.moduleid);
      const prevChapterid = parseInt(this.$route.params.chapterid) - 1;

      if (prevModuleid >= 0 && prevChapterid >= 0) {
        return chapterData[prevModuleid].chapters[prevChapterid].chapterTitle;
      }

        const prevModule = chapterData[prevModuleid - 1].name;
        return `Vorige module: ${prevModule}`;
    },
    buttonTextNextChapter() {
      const nextModuleid = parseInt(this.$route.params.moduleid);
      const nextChapterid = parseInt(this.$route.params.chapterid) + 1;
      const currentChapterid = parseInt(this.$route.params.chapterid);
      const lastChapter = chapterData[nextModuleid].chapters.length - 1;
     if (currentChapterid === lastChapter) {
        const nextModule = chapterData[nextModuleid + 1].name;
        return `Volgende module: ${nextModule}`;
      }

        return chapterData[nextModuleid].chapters[nextChapterid].chapterTitle;
    },

    isNotLastChapter() {
      // Correctie om data uit JSON & router te matchen
      const currentmoduleid = parseInt(this.$route.params.moduleid) + 1;
      const currentChapterid = parseInt(this.$route.params.chapterid) + 1;
      const lastModule = chapterData.length;
      const lastChapter = chapterData[lastModule - 1].chapters.length;

      // Controleert of het laatste hoofdstuk en laatste module is
      const isLastChapter = currentmoduleid === lastModule && currentChapterid === lastChapter;
      if (isLastChapter === true) {
        return false;
      }
        return true;
    },
  },
  methods: {
    lastChapterCalc() {
      let currentmoduleid = parseInt(this.$route.params.moduleid);
      if (!currentmoduleid) {
        currentmoduleid = 0;
      }
      // Wanneer module 0 is, is 'return chapterData[previd].chapters.length -1' negatief en geeft error
      if (currentmoduleid === 0) {
        return chapterData[currentmoduleid].chapters.length;
      }
      const previd = currentmoduleid - 1;
      // Last chapter is length of chapters of current module - 1
      return chapterData[previd].chapters.length - 1;
    },
    currentChapterIndex() {
      const currentidCalc = this.$route.params.moduleid;
      const currentChapterLength = chapterData[currentidCalc].chapters.length - 1;
      // console.log("currentChapterCalc: " + currentChapterLength);
      return currentChapterLength;
    },
    back() {
      const prevModuleChapter = this.lastChapterCalc();
      const backNumberChapter = this.$route.params.chapterid - 1;
      const backNumberModule = this.$route.params.moduleid - 1;
      if (backNumberChapter < 0) {
        this.$router.push({ name: 'Onboarding', params: { moduleid: backNumberModule, chapterid: prevModuleChapter } });
      } else {
        this.$router.push({ name: 'Onboarding', params: { moduleid: this.$route.params.moduleid, chapterid: backNumberChapter } });
      }
    },
    forward() {
      if (this.currentChapterIndex() === parseInt(this.$route.params.chapterid)) {
        // console.log("CurrentChapter" + currentChapter)

        // Router geeft strings door. Dit begrijpt JS niet en moet daarom omgezet worden naar een Integer
        const nextModuleNumber = parseInt(this.$route.params.moduleid) + 1;
        this.$router.push({ name: 'Onboarding', params: { moduleid: nextModuleNumber, chapterid: 0 } });
      } else {
        // console.log('else');
        const nextChapterNumber = parseInt(this.$route.params.chapterid) + 1;
        // console.log(nextChapterNumber);
        this.$router.push({ name: 'Onboarding', params: { moduleid: this.$route.params.moduleid, chapterid: nextChapterNumber } });
     }
    },
  },
};

</script>
