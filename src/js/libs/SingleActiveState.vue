<script>
export default {
  name: 'SingleActiveState',
  props: {
    element: {
      default: 'div',
      type: String,
    },
    initial: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      index: null,
      active: false,
    };
  },
  watch: {
    active() {
      if (this.active) {
        this.$emit('setActive', this.index);
        return;
      }

      this.$emit('setInactive', this.index);
    },
  },
  mounted() {
    if (this.initial !== false) {
      this.setActive();
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
    setActive() {
      this.active = true;
    },
    setInactive() {
      this.active = false;
    },
  },
  render(createElement) {
    return createElement(
      this.element,
      this.$scopedSlots.default({
        active: this.active,
        setActive: this.setActive,
        setInactive: this.setInactive,
        toggleActive: this.toggleActive,
      }),
    );
  },
};
</script>
