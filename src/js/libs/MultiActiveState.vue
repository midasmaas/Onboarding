<script>
export default {
  name: 'MultiActiveState',
  props: {
    element: {
      default: 'div',
      type: String,
    },
  },
  data() {
    return {
      activeIndex: null,
    };
  },
  mounted() {
    this.$children.forEach((item, index) => {
      // eslint-disable-next-line
      item.index = index;
      item.$on('setActive', this.setActive);
      item.$on('setInactive', this.setInactive);
    });
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;

      this.$children.forEach((item, childIndex) => {
        // eslint-disable-next-line
        item.index = childIndex;

        if (this.activeIndex !== childIndex) {
          item.setInactive();
        }
      });
    },
    setInactive(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      }
    },
  },
  render(createElement) {
    return createElement(
      this.element,
      this.$slots.default,
    );
  },
};
</script>
