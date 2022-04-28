<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { faqs } from '@/data/faqs'
import { formatDate } from '@/services/dates'
import { useScheduleStore } from '@/stores/schedule'
import { computed } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'

const scheduleStore = useScheduleStore()

const submitDeadline = computed<string>(() =>
  formatDate('weekday-time', scheduleStore.schedule.submitDeadline)
)
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

    <Panel title="Deadline for project submissions?">
      The deadline for project submissions is {{ submitDeadline }}. Submit your
      projects to
      <a
        target="_blank"
        href="https://hackupc2022.devpost.com/"
        rel="noopener noreferrer"
        >Devpost</a
      >.
    </Panel>
  </PanelContainer>
</template>
