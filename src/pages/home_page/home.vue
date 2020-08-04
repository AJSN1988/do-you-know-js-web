<template>
  <section class="home-page">
    <vue-headful
      :title="localeGetter === 'ru' ? title.ru : title.en "
      :lang="localeGetter"
    />
    <h1>Home page</h1>
    <p>{{ localeGetter }}</p>
    <button @click="localeMutation('en')">
      en
    </button>
    <button @click="localeMutation('ru')">
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
    return {
      title: {
        ru: 'А ты знаешь JavaScript ?',
        en: 'Do you know JavaScript ?',
      },
    };
  },
  computed: {
    ...mapGetters('AppState', ['themeGetter']),
    ...mapGetters('AppState', ['localeGetter']),
  },
  methods: {
    ...mapMutations('AppState', ['localeMutation']),
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
