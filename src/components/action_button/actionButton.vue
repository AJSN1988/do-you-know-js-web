<template>
  <button>{{ this.$props.label }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    label: {
      type: String,
      default: null,
      requare: true,
    },
    fontSize: {
      type: String,
      default: '1rem',
      requare: false,
    },
    fontWeight: {
      type: String,
      default: '300',
      requare: false,
    },
    textInUppercase: {
      type: Boolean,
      default: false,
      requare: false,
    },
    padding: {
      type: String,
      default: 'auto',
      requare: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
