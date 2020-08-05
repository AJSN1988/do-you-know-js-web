<template>
  <section class="home-page">
    <vue-headful
      :title="$t('common.metaTitle')"
      :lang="getLocale"
      :description="$t('common.metaDescription')"
      :keywords="$t('common.metaKeywords')"
    />
    <h1>{{ $t('pages.home.appName') }}</h1>
    <p>{{ getLocale }}</p>
    <button @click="changeLocale('en')">
      en
    </button>
    <button @click="changeLocale('ru')">
      ru
    </button>
  </section>
</template>

<script>
import VueHeadful from 'vue-headful';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'HomePageComponent',
  components: {
    vueHeadful: VueHeadful,
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
    ...mapMutations('AppState', ['themeMutation']),
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
