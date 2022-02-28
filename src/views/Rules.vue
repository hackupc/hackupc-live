<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { rules } from '@/data/rules'
import VueMarkdownIt from 'vue3-markdown-it'
</script>

<template>
  <div id="rules" class="container">
    <Panel
      v-for="rule in rules"
      :key="rule.title"
      :title="rule.title"
      size="big"
    >
      <VueMarkdownIt :source="rule.description" />
    </Panel>
  </div>
</template>
