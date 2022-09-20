<template>
  <div class="grid">
    <div class="media-left__text">
      <div v-html="dataForBlock"></div>
    </div>

    <div class="media-left__media">
      <ul v-for="imgs in imgsForBlock">
        <li>
          <div>
            <img :src="imgs" alt="Jurrian">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockTextLeft',
  props: {
    dataForBlock: String,
    imgsForBlock: Array,
  },
};
</script>
