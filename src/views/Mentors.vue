<script setup lang="ts">
import { mentors } from '@/data/mentors'
import Panel from '@/components/Panel.vue'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '@/components/PanelContainer.vue'
</script>

<template>
  <PanelContainer id="missions">
    <Panel v-for="mentor in mentors" :key="mentor.title" :title="mentor.title">
      <VueMarkdownIt :source="mentor.description" />
      <VueMarkdownIt :source="mentor.linkedin" />
      <VueMarkdownIt :source="mentor.slack" />
    </Panel>
  </PanelContainer>
</template>
