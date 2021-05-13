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
    <div v-if="talk.videoUrl" class="embed">
      <iframe
        :src="talk.videoUrl"
        class="embed__item"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </panel>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Panel from '@/components/Panel.vue'
import { Talk } from '@/data/talks'
import VueMarkdownIt from 'vue3-markdown-it'
import { formatInterval, parseSpanishDate } from '@/services/dates'

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
    }
  },
})
</script>

<style lang="scss" scoped>
.talk {
  &__time {
    margin-bottom: 1.5em;
    font-style: italic;
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
.embed {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;

  &__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
