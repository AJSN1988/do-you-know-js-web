<template>
  <section
    class="home-page"
    :class="themeGetter"
  >
    <vue-headful
      :title="$t('common.metaTitle')"
      :lang="getLocale"
      :description="$t('common.metaDescription')"
      :keywords="$t('common.metaKeywords')"
    />
    <main>
      <section
        class="app-info"
        :class="themeGetter"
      >
        <div class="logo">
          <svg
            width="96px"
            height="96px"
            viewBox="0 0 96 96"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Lunacy</desc>
            <defs>
              <image
                id="img_1"
                width="180"
                height="180"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
            <use
              xlink:href="#img_1"
              fill="#FFFFFF"
              stroke="none"
              transform="scale(0.53333336 0.53333336)"
            />
          </svg>
        </div>
        <div class="app-name">
          <h1 :class="themeGetter">
            {{ $t('pages.home.appName') }}
          </h1>
        </div>
        <div class="description">
          {{ $t('pages.home.appDescription') }}
        </div>
        <start-button
          :label="$t('components.startButton.mainLabel')"
          :waiting-label="$t('components.startButton.waitingLabel')"
          :error-label="$t('components.startButton.errorLabel')"
        />
      </section>
      <section class="app-controls"></section>
    </main>
    <footer-component />
  </section>
</template>

<script>
import VueHeadful from 'vue-headful';
import { mapGetters, mapMutations } from 'vuex';

import StartButton from '../../components/start_button/startButton.vue';
import Footer from '../../components/footer/footer.vue';

export default {
  name: 'HomePageComponent',
  components: {
    vueHeadful: VueHeadful,
    startButton: StartButton,
    footerComponent: Footer,
  },
  data() {
    return {};
  },
  computed: {
    getLocale() {
      return this.$i18n.locale;
    },
    ...mapGetters('AppState', ['themeGetter']),
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    changeTheme(theme) {
      this.themeMutation(theme);
    },
    ...mapMutations('AppState', ['themeMutation']),
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
