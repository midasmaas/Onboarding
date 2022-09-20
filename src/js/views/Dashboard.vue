<template>
  <div class="dashboardModulesGridContainer">
    <ul class="dashboardModulesGrid">
      <DashboardModule v-for="(dashboardSingleModule, index) in Dashboard" :dashboardSingleModuleProp="dashboardSingleModule" :key="index" :dashboardModuleIndex="index"></DashboardModule>
    </ul>

  </div>
</template>

<script>
import DashboardModule from '@/js/components/DashboardModule.vue';
import dashboardData from '@/json-data/modules.json';

export default {
  name: 'Dashboard',
  components: {
    DashboardModule,
  },
  data() {
    return {
      Dashboard: dashboardData,
    };
  },
};
</script>
