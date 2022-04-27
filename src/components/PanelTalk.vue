<script setup lang="ts">
import IconLabel from '@/components/IconLabel.vue'
import Panel from '@/components/Panel.vue'
import type { Talk } from '@/data/talks'
import { formatInterval, parseSpanishDate } from '@/services/dates'
import VueMarkdownIt from 'vue3-markdown-it'
import VideoThumbnail from './VideoThumbnail.vue'
import { LocationMarkerIcon } from '@heroicons/vue/solid'

interface Props {
  talk: Talk
}
defineProps<Props>()
</script>

<template>
  <Panel :title="talk.title">
    <IconLabel class="channel" centered>
      <template #icon>
        <LocationMarkerIcon />
      </template>
      {{ talk.where }}
    </IconLabel>
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
    <VideoThumbnail v-if="talk.streamLink" :video-url="talk.streamLink" />
  </Panel>
</template>

<style lang="scss" scoped>
.talk {
  &__time {
    margin-bottom: 1.5em;
    color: #ec6162;
    font-style: italic;

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
