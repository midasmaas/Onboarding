<template>
  <div class="collegas-apps">
    <div class="collegas-apps__container">
      <div class="collegas-apps-filter-buttons__container">
        <div v-for="category in appCategories" class="collegas-apps-filter-buttons__button">
          <a
              @click="activeCategory !== category ?
              activeCategory = category : activeCategory = null"
              :class="activeCategory === category ?
             'collegas-apps-filter-buttons__button__active':'collegas-apps-filter-buttons__button__not-active'">
            <p>{{ category }}</p>
          </a>
        </div>

        <div class="collegas-apps-filter-buttons__button">
          <a @click="ZASorting = !ZASorting" class="collegas-apps-filter-buttons__button__position__div">
            <p>{{ sorteerKnopTitel }}</p>
          </a>
        </div>

      </div>
      <div class="collegas-apps__grid">
        <app-item v-for="(app, index) in sorteerItems" :key="index" :dataForApp="app"></app-item>
      </div>
    </div>
  </div>

</template>

<script>

// component import
import AppItem from '@/js/components/appItem';
import FilterButtonsApps from '@/js/components/filterButtonsApps';

// data import
import appsData from '@/json-data/apps.json';

export default {
  name: 'Apps',
  data() {
    return {
      apps: appsData,
      activeCategory: null,
      ZASorting: false,
    };
  },
  computed: {
    filterItems() {
      if (this.activeCategory !== null) {
        return this.apps.filter((x) => x.catagory === this.activeCategory);
      }
      return this.apps;
    },
    sorteerItems() {
      if (this.ZASorting === true) {
        return this.filterItems.sort((a, b) => a.appTitle.localeCompare(b.appTitle)).reverse();
      }
      return this.filterItems.sort((a, b) => a.appTitle.localeCompare(b.appTitle));
    },
    sorteerKnopTitel() {
      if (this.ZASorting === true) {
        return 'Z - A';
      }
      return 'A - Z';
    },

    appCategories() {
      const categories = [];
      this.apps.forEach((app) => {
        categories.push(app.catagory);
      });
      // checkt op duplicaten
      return categories.filter((v, i, a) => a.indexOf(v) === i).sort();
    },
  },
  components: {
    FilterButtonsApps,
    AppItem,
  },
};
</script>
