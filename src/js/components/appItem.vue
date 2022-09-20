<template>
        <div class="collegas-apps__item apps__item__height">
          <div class="apps__item__img__container">
            <img class="app__item__img" :src="dataForApp.appIcon"
                 alt="appIcoon">
          </div>
            <h3 class="app__item__title">
              {{dataForApp.appTitle}}
            </h3>
          <div class="app__item__description">
            <p> {{dataForApp.discription}} </p>
          </div>

          <ul v-for="link in dataForApp.links">
            <li>
                <a :href="link.linkURL" alt="Jurrian"> {{ link.linkTitle }} </a>
            </li>
          </ul>
        </div>

</template>

<script>
export default {
  name: 'appItem',
  props: {
    dataForApp: {
      type: Object,
      default: () => {
      },
    },
  },
};
</script>
