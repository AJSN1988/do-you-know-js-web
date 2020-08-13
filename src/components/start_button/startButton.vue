<template>
  <div class="start-button">
    <button @click="startTesting()">
      <spinner v-if="status === 'loading'" />
      <span>{{ getLabel }}</span>
    </button>
  </div>
</template>

<script>
import Spinner from '../spinner/spinner.vue';

export default {
  name: 'ActionButton',
  components: {
    spinner: Spinner,
  },
  props: {
    label: {
      type: String,
      requared: true,
      default: null,
    },
    waitingLabel: {
      type: String,
      requared: true,
      default: null,
    },
    errorLabel: {
      type: String,
      requared: true,
      default: null,
    },
  },
  data() {
    return {
      status: 'idle',
    };
  },
  computed: {
    getLabel() {
      if (this.status === 'idle') {
        return this.$props.label;
      }
      if (this.status === 'loading') {
        return this.$props.waitingLabel;
      }
      return this.$props.errorLabel;
    },
  },
  methods: {
    startTesting() {
      new Promise((res, rej) => {
        this.status = 'loading';
        setTimeout(() => {
          const r = Math.floor(Math.random() * (100 - 1)) + 1;
          console.log(r);
          if (r % 2 === 0) {
            res();
          } else {
            rej();
          }
        }, 2000);
      })
        .then(() => {
          this.status = 'idle';
        })
        .catch(() => {
          this.status = 'error';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
