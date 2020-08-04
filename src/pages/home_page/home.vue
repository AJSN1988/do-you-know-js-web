<template>
  <section class="home-page">
    <h1>Home page</h1>
    <p>{{ themeGetter }}</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomePageComponent',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('AppState', ['themeGetter']),
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
