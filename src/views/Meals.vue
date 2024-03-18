<script setup lang="ts">
import PanelContainer from '../components/PanelContainer.vue'
import VueMarkdownIt from 'vue3-markdown-it'
import Panel from '@/components/Panel.vue'

import { meals } from '@/data/meals'
</script>

<template>
  <PanelContainer id="missions">
    <Panel v-for="meal in meals" :key="meal.title" :title="meal.title">
      <VueMarkdownIt :source="meal.description" />
    </Panel>
  </PanelContainer>
</template>
