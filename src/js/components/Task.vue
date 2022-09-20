<template>
  <label>
    <input type="checkbox" value="1" v-model="checked">
    {{ task.description }}
  </label>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      default: () => {
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    checked: {
      get() {
        return this.$store.getters.completedTaskIds.includes(this.task.id);
      },
      set(value) {
        if (value) {
          this.$store.dispatch('addToCompletedTaskIds', this.task.id);
          return;
        }
        this.$store.dispatch('removeFromCompletedTaskIds', this.task.id);
      },
    },
  },
}
</script>

<style scoped>

</style>