<template>
  <button
    :style="getStyleSheet"
    @click="this.$props.action"
  >
    {{ this.$props.label }}
  </button>
</template>

<script>
import { mapGetters } from 'vuex';

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
    colorLightIdle: {
      type: String,
      default: '#000000',
      requare: false,
    },
    colorLightHover: {
      type: String,
      default: '#ffffff',
      requare: false,
    },
    colorDarkIdle: {
      type: String,
      default: '#ffffff',
      requare: false,
    },
    colorDarkHover: {
      type: String,
      default: '#000000',
      requare: false,
    },
    action: {
      type: Function,
      default: null,
      requare: true,
    },
  },
  computed: {
    getStyleSheet() {
      let themeColorIdle;
      let themeColorHover;
      if (this.themeGetter === 'light') {
        themeColorIdle = this.$props.colorLightIdle;
        themeColorHover = this.$props.colorLightHover;
      } else {
        themeColorIdle = this.$props.colorDarkIdle;
        themeColorHover = this.$props.colorDarkHover;
      }

      const textTransform = this.$props.textInUppercase ? 'uppercase' : 'none';

      return {
        '--border-color': themeColorIdle,
        '--background-color-hovered': themeColorIdle,
        '--color': themeColorIdle,
        '--color-hovered': themeColorHover,
        '--text-transform': textTransform,
        '--font-weight': this.$props.fontWeight,
        '--padding': this.$props.padding,
        '--font-size': this.$props.fontSize,
      };
    },
    ...mapGetters('AppState', ['themeGetter']),
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
