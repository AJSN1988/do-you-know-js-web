<template>
  <section class="app-settings">
    <h2 :class="themeGetter">
      {{ $t('components.appSettings.header') }}
    </h2>
    <div
      :class="themeGetter"
      class="annotation"
    >
      {{ $t('components.appSettings.annotation') }}
    </div>
    <div
      :class="themeGetter"
      class="controls"
    >
      <div class="language-controls">
        <button
          :class="{
            'active': this.$i18n.locale === 'ru',
            'light': themeGetter === 'light',
            'dark': themeGetter === 'dark'
          }"
          @click="changeLocale('ru')"
        >
          RU
        </button>
        <button
          :class="{
            'active': this.$i18n.locale === 'ru',
            'light': themeGetter === 'light',
            'dark': themeGetter === 'dark'
          }"
          @click="changeLocale('en')"
        >
          EN
        </button>
      </div>
      <div class="theme-controls">
        <button
          :class="themeGetter === 'light' ? 'active' : ''"
          @click="changeTheme($event, 'light')"
        >
          {{ $t('components.appSettings.buttons.light') }}
        </button>
        <button
          :class="themeGetter === 'dark' ? 'active' : ''"
          @click="changeTheme($event, 'dark')"
        >
          {{ $t('components.appSettings.buttons.dark') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AppSettings',
  computed: {
    ...mapGetters('AppState', ['themeGetter']),
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    changeTheme(e, theme) {
      if (e.target.classList.contains('active')) return false;

      this.themeMutation(theme);
      return false;
    },
    ...mapMutations('AppState', ['themeMutation']),
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
