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
      <VueMarkdownIt :source="mission.description" />
    </Panel>
  </PanelContainer>
</template>
