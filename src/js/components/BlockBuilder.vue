<template>
<div>
  <ul>
      <component v-for="(block, index) in dataForBuilder.contentBlocks" :key="index" :dataForBlock="block.blockData" :imgsForBlock="block.imgPaths" :is="blockTypeComponent(block.blockType)" />
  </ul>
</div>
</template>

<script>

// Content-block types
const BlockMediaRight = () => import('@/js/components/contentBlocks/BlockMediaRight');
const BlockMediaLeft = () => import('@/js/components/contentBlocks/BlockMediaLeft');
const BlockTextWithFull = () => import('@/js/components/contentBlocks/BlockTextWithFull');
const BlockMediaWithFull = () => import('@/js/components/contentBlocks/BlockMediaWithFull');

export default {
  name: 'BlockBuilder',
  data() {
    return {
      blockType: null,
    };
  },
  props: {
    dataForBuilder: Object,
  },
  methods: {
    blockTypeComponent(blockType) {
      if (blockType === 'mediaRight') return BlockMediaRight;
      if (blockType === 'mediaLeft') return BlockMediaLeft;
      if (blockType === 'textWithFull') return BlockTextWithFull;
      if (blockType === 'imgWithFull') return BlockMediaWithFull;
      return BlockTextWithFull;
    },
  },
};
</script>

<style scoped>

</style>
