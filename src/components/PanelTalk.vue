<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import type { Talk } from '@/data/talks'
import { formatInterval, parseSpanishDate } from '@/services/dates'
import VueMarkdownIt from 'vue3-markdown-it'
import VideoThumbnail from './VideoThumbnail.vue'

interface Props {
  talk: Talk
}
defineProps<Props>()
</script>

<template>
  <Panel :title="talk.title">
    <h3>Company: {{ talk.speaker }}</h3>
    <p class="talk__time">
      {{
        formatInterval(
          parseSpanishDate('date-time', talk.start),
          parseSpanishDate('date-time', talk.end)
        )
      }}
    </p>
    <VueMarkdownIt :source="talk.description" />
    <VideoThumbnail v-if="talk.videoUrl" :video-url="talk.videoUrl" />
  </Panel>
</template>

<style lang="scss" scoped>
.talk {
  &__time {
    margin-bottom: 1.5em;
    font-style: italic;
    color: #ec6162;
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
