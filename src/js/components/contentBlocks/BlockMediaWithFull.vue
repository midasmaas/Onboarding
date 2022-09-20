<template>
  <div class="media-with-full">
    <ul v-for="imgs in imgsForBlock">
      <li>
        <div>
          <img :src="imgs" alt="Jurrian">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlockMediaWithFull',
  props: {
    dataForBlock: String,
    imgsForBlock: Array,
  },
};
</script>
