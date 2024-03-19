<script setup lang="ts">
import { travels } from '@/data/travel'
import Panel from '@/components/Panel.vue'
import PanelContainer from '@/components/PanelContainer.vue'
import VueMarkdownIt from 'vue3-markdown-it'
</script>

<template>
  <PanelContainer id="missions">
    <Panel v-for="travel in travels" :key="travel.title" :title="travel.title">
      <VueMarkdownIt :source="travel.description" />
    </Panel>
  </PanelContainer>
</template>
