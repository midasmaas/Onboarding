<template>
  <div class="text-with-full">
    <div v-html="dataForBlock"/>
  </div>
</template>

<script>
export default {
  name: 'BlockTextWithFull',
  props: {
    dataForBlock: String,
  },
};
</script>
