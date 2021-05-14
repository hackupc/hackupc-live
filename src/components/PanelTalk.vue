<template>
  <panel :title="talk.title">
    <h3>Company: {{ talk.speaker }}</h3>
    <p class="talk__time">
      {{
        formatInterval(
          parseSpanishDate('date-time', talk.start),
          parseSpanishDate('date-time', talk.end)
        )
      }}
    </p>
    <vue-markdown-it :source="talk.description" />
    <video-thumbnail v-if="talk.videoUrl" :videoUrl="talk.videoUrl" />
  </panel>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Panel from '@/components/Panel.vue'
import { Talk } from '@/data/talks'
import VueMarkdownIt from 'vue3-markdown-it'
import { formatInterval, parseSpanishDate } from '@/services/dates'
import VideoThumbnail from './VideoThumbnail.vue'

export default defineComponent({
  components: {
    Panel,
    VueMarkdownIt,
    VideoThumbnail,
  },
  props: {
    talk: {
      type: Object as PropType<Talk>,
      required: true,
    },
  },
  setup() {
    return {
      formatInterval,
      parseSpanishDate,
    }
  },
})
</script>

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
