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
    <a
      v-if="talk.videoUrl"
      :href="talk.videoUrl"
      class="talk__video"
      target="_blank"
    >
      <img
        :src="getVideoThumbnail(talk.videoUrl)"
        alt="Video thumbnail"
        class="talk__video-thumbnail"
        loading="lazy"
      />
      <img
        src="@/assets/img/video-thumbnail-play.svg"
        alt=""
        class="talk__video-thumbnail-play"
      />
    </a>
  </panel>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Panel from '@/components/Panel.vue'
import { Talk } from '@/data/talks'
import VueMarkdownIt from 'vue3-markdown-it'
import { formatInterval, parseSpanishDate } from '@/services/dates'

function getVideoThumbnail(videoUrl: string): string {
  const videoId = videoUrl.match(
    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  )?.[1]

  return `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
}

export default defineComponent({
  components: {
    Panel,
    VueMarkdownIt,
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
      getVideoThumbnail,
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

  &__video {
    display: block;
    position: relative;
    margin-bottom: 2rem;
  }

  &__video-thumbnail {
    display: block;
    max-width: 100%;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  &__video-thumbnail-play {
    position: absolute;
    height: 8rem;
    bottom: 0;
    right: 0;
    transform: translate(0, 50%);
  }
}
</style>
