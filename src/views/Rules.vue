<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { rules } from '@/data/rules'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
</script>

<template>
  <PanelContainer id="rules">
    <Panel
      v-for="rule in rules"
      :key="rule.title"
      :title="rule.title"
      size="big"
    >
      <VueMarkdownIt :source="rule.description" />
    </Panel>
  </PanelContainer>
</template>
