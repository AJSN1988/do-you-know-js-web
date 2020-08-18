<template>
  <footer :class="themeGetter">
    <div class="footer-container">
      <div class="controls">
        <button>{{ $t('components.footer.writeMeButton') }}</button>
        <div class="placeholder" />
        <button>{{ $t('components.footer.policyButton') }}</button>
      </div>
      <div class="copyright">
        {{ $t('components.footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Footer',
  computed: {
    ...mapGetters('AppState', ['themeGetter']),
  },
  methods: {
    showWriteMeForm() {
      console.log('Write me form');
    },
    showPrivacy() {
      console.log('Provacy police');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
