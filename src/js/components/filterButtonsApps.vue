<template>
  <div class="filterModuleButtonContainer">
      <div class="filterModuleButton">
        <a @click="designCatagory = !designCatagory">
          <div class="filterModuleButtonPositioningDiv">
            <p>Design</p>
          </div>
        </a>
      </div>

    <div class="filterModuleButton">
      <a>
        <div class="filterModuleButtonPositioningDiv">
          <p>Marketing</p>
        </div>
      </a>
    </div>

      <div class="filterModuleButton">
        <a>
          <div class="filterModuleButtonPositioningDiv">
            <p>Tech</p>
          </div>
        </a>
      </div>

    <div class="filterModuleButton">
      <a>
        <div class="filterModuleButtonPositioningDiv">
          <p>Plannen</p>
        </div>
      </a>
    </div>

      <div class="filterModuleButton">
        <a>
          <div class="filterModuleButtonPositioningDiv">
            <p>Documenteren</p>
          </div>
        </a>
      </div>

  </div>
</template>

<script>
import appsData from '@/json-data/apps.json';

export default {
  name: 'filterButtonsApps',
  data() {
    return {
      apps: appsData,
      techCatagory: false,
      designCatagory: false,
      marketingCatagory: false,
    };
  },
};
</script>
