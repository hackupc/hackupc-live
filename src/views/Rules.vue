<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { rules } from '@/data/rules'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
import { judgings } from '@/data/judging'

const route = useRoute()

const currentViewRules = computed<'judging' | 'hRules'>(() => {
  if (
    route.params?.rulesId !== 'judging' &&
    route.params?.rulesId !== 'hRules'
  ) {
    return 'judging'
  }

  return route.params.rulesId
})
</script>

<template>
  <PanelContainer id="rules">
    <div class="explore">
      <RouterLink
        :to="{
          name: 'map',
          params: { mapId: 'judging' },
        }"
        class="button"
      >
        <FontAwesomeIcon icon="map-location-dot" style="margin-right: 4px" />
        Go to judging map
      </RouterLink>
      <div>
        <RouterLink
          :to="{
            name: 'rules',
            params: { rulesId: 'judging' },
          }"
          class="button"
          :class="{ 'button--disabled': currentViewRules === 'judging' }"
        >
          Judging
        </RouterLink>
        <RouterLink
          :to="{
            name: 'rules',
            params: { rulesId: 'hRules' },
          }"
          class="button"
          :class="{ 'button--disabled': currentViewRules === 'hRules' }"
        >
          Rules
        </RouterLink>
      </div>
    </div>

    <template v-if="currentViewRules === 'judging'">
      <Panel
        v-for="j in judgings"
        :key="j.title"
        :title="j.title"
        :size="j.size"
      >
        <VueMarkdownIt :source="j.description" />
      </Panel>
    </template>
    <template v-if="currentViewRules === 'hRules'">
      <Panel
        v-for="rule in rules"
        :key="rule.title"
        :title="rule.title"
        :size="rule.size"
      >
        <VueMarkdownIt :source="rule.description" />
      </Panel>
    </template>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/variables' as *;

.explore {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  gap: 0.5rem;

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
  color: #000;
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
