<template>
  <div class="collegas-apps">
    <div class="collegas-apps__container">
      <div class="collegas-apps-filter-buttons__container non-selectable">
        <div v-for="department in departments" class="collegas-apps-filter-buttons__button">
          <a
              @click="activeDepartment !== department ?
              activeDepartment = department : activeDepartment = null"
              :class="activeDepartment === department ?
             'collegas-apps-filter-buttons__button__active':'collegas-apps-filter-buttons__button__not-active'">
            <p>{{ department }}</p>
          </a>
        </div>

        <div class="collegas-apps-filter-buttons__button">
          <a @click="ZASorting = !ZASorting" class="collegas-apps-filter-buttons__button__position__div">
            <p>{{ sorteerKnopTitel }}</p>
          </a>
        </div>

      </div>
      <div class="collegas-apps__grid">
        <collega-item v-for="(collega, index) in sorteerItems" :key="index" :dataForCollega="collega"></collega-item>
      </div>
    </div>
  </div>
</template>

<script>
import collegaItem from '@/js/components/collegaItem';

// data import
import collegaData from '@/json-data/collegas.json';

export default {
  name: 'Collegas',
  data() {
    return {
      collegas: collegaData,
      activeDepartment: null,
      ZASorting: false,
    };
  },
  computed: {
    filterItems() {
      if (this.activeDepartment !== null) {
        return this.collegas.filter((x) => x.department === this.activeDepartment);
      }
      return this.collegas;
    },
    sorteerItems() {
      if (this.ZASorting === true) {
        return this.filterItems.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      }
      return this.filterItems.sort((a, b) => a.name.localeCompare(b.name));
    },
    sorteerKnopTitel() {
      if (this.ZASorting === true) {
        return 'Z - A';
      }
      return 'A - Z';
    },

    departments() {
      const departments = [];
      this.collegas.forEach((collega) => {
        departments.push(collega.department);
      });
      // checkt op duplicaten
      return departments.filter((v, i, a) => a.indexOf(v) === i).sort();
    },
  },
  components: {
    collegaItem,
  },
};
</script>
