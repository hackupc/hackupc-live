<template>
  <panel :title="talk.title">
    <h3 class="talk__speaker">Speaker: {{ talk.speaker }}</h3>
    <vue-markdown-it :source="talk.description" />
    <div class="embed">
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

export default defineComponent({
  props: {
    talk: {
      type: Object as PropType<Talk>,
      required: true,
    },
  },
  components: {
    Panel,
    VueMarkdownIt,
  },
})
</script>

<style lang="scss" scoped>
.talk {
  &__speaker {
    margin-bottom: 24px !important;
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
