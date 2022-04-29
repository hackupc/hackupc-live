<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { missions } from '@/data/missions'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
</script>

<template>
  <PanelContainer id="missions">
    <Panel
      v-for="mission in missions"
      :key="mission.title"
      :title="mission.title"
      :size="mission.size"
    >
      <!--<VueMarkdownIt :source="mission.description" />-->
      <div class="secret">
        <div class="secret__title">Secret</div>
        <div class="secret__text">Come back after the opening cerimony</div>
      </div>
    </Panel>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.channel {
  margin-bottom: 1em;
}

strong {
  color: $highlight-color;
}

.secret {
  --title-blur: 3px;
  --text-blur: 1.5px;

  padding: 0 0 1rem;
  color: $text-soft-color;
  cursor: help;
  font-style: italic;
  line-height: 1;
  text-align: center;

  &:hover {
    --title-blur: 0;
    --text-blur: 0;
  }

  &__title {
    margin: 0 0 1rem;
    filter: blur(var(--title-blur, 3px));
    font-size: 3rem;
    font-weight: bold;
    transition: filter ease-out 500ms;
  }

  &__text {
    margin: 0;
    filter: blur(var(--text-blur, 1.5px));
    font-size: 1.5rem;
    transition: filter ease-out 500ms;
  }
}
</style>
