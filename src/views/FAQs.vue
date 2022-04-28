<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { faqs } from '@/data/faqs'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
</script>

<template>
  <PanelContainer id="faqs">
    <Panel
      v-for="faq in faqs"
      :key="faq.title"
      :title="faq.title"
      :size="faq.size"
    >
      <VueMarkdownIt :source="faq.description" />
    </Panel>
  </PanelContainer>
</template>
