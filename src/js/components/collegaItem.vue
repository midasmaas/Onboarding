<template>
  <div class="collegas-apps__item collegas__item__height">
    <img class="collegas__item__img" :src="dataForCollega.profilePic"
         alt="collegaFoto">
    <h3
        class="collegas__item__name__function"> {{ dataForCollega.name + ' - ' + dataForCollega.function }}
    </h3>
    <div class="collegas__item__button-container">
      <a class="collegas__item__button" v-for="button in dataForCollega.buttons" :href="button.buttonPath">
        <img :src="button.buttonIMG">
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'collegaItem',
  props: {
    dataForCollega: {
      type: Object,
      default: () => {
      },
    },
  },
};
</script>
