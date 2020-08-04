<template>
  <section class="testing-page">
    <h1>Testing page</h1>
    <p>{{ themeGetter }}</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TestingPageComponent',
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
