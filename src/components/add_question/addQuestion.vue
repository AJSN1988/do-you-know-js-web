<template>
  <section
    class="add-question"
    :class="themeGetter"
  >
    <h2 :class="themeGetter">
      {{ $t('components.addQuestion.header') }}
    </h2>
    <div
      :class="themeGetter"
      class="annotation"
    >
      {{ $t('components.addQuestion.annotation') }}
    </div>
    <action-button
      :label="$t('components.addQuestion.button')"
      :text-in-uppercase="true"
      padding="10px 65px"
      :action="testAddQuestion.bind(this)"
    />
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
  methods: {
    testAddQuestion() {
      console.log('Add question');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
