<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import config from '@/config'
import { missions } from '@/data/missions'
import { ref } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
import SecretContent from '../components/SecretContent.vue'

const hideChallengesAndPrizes = ref(config.hideChallengesAndPrizes)
</script>

<template>
  <PanelContainer id="missions">
    <Panel
      v-for="mission in missions"
      :key="mission.title"
      :title="mission.title"
      :size="mission.size"
    >
      <SecretContent v-if="hideChallengesAndPrizes" />
      <VueMarkdownIt v-else :source="mission.description" />
      <div
        style="
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        "
      >
        <img :src="mission.picture" style="width: 75%" />
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
</style>
