<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { faqs } from '@/data/faqs'
import { formatDate } from '@/services/dates'
import { useScheduleStore } from '@/stores/schedule'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
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
      The deadline for project submissions is
      <strong>{{ submitDeadline }}</strong
      >. Submit your projects to
      <a
        target="_blank"
        href="https://hackupc2022.devpost.com/"
        rel="noopener noreferrer"
        >Devpost</a
      >.
    </Panel>

    <Panel title="I have another question... Biene?">
      If you have any other questions and you can't find it here, make sure to
      pay us a visit at our
      <RouterLink
        :to="{
          name: 'map',
          params: { mapId: 'indoors' },
        }"
        >InfoDesk</RouterLink
      >
    </Panel>
  </PanelContainer>
</template>
