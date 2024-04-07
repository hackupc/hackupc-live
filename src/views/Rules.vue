<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { rules } from '@/data/rules'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <PanelContainer id="rules">
    <div class="explore">
      <div class="explore__list">
        <RouterLink
          :to="{
            name: 'map',
            params: { mapId: 'judging' },
          }"
          class="button"
          >See judging map</RouterLink
        >
      </div>
    </div>

    <Panel
      v-for="rule in rules"
      :key="rule.title"
      :title="rule.title"
      :size="rule.size"
    >
      <VueMarkdownIt :source="rule.description" />
    </Panel>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/variables' as *;
.explore {
  margin-top: 20px;
  width: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;

  &__title {
    margin: 0 0 20px;
    color: $primary-color-light;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
}

.button {
  display: inline-block;
  padding: 8px 24px;
  margin: 0 0.2em 16px;
  background: $links-color;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  color: #000000;
  cursor: url('../assets/img/rocket-fire.png'), auto;
  font-weight: bold;

  &:hover {
    background: $links-color-hover;
    color: $text-color;
  }

  &--disabled {
    filter: grayscale(0.5);
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
