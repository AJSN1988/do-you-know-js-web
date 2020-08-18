<template>
  <section
    class="add-question"
    :class="themeGetter"
  >
    <h2>{{ $t('') }}</h2>
    <div class="annotation">
      {{ $t('') }}
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionButton from '../action_button/actionButton.vue';

export default {
  name: 'AddQuestion',
  components: {
    actionButton: ActionButton,
  },
  computed: {
    ...mapGetters('AppState', ['themeGetter']),
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
