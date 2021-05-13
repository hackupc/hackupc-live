<template>
  <panel :title="talk.title">
    <h3>Company: {{ talk.speaker }}</h3>
    <h5>
      <i class="talk__speaker">{{ talk.time }}</i>
    </h5>
    <vue-markdown-it :source="talk.description" />
  </panel>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Panel from '@/components/Panel.vue'
import { Talk } from '@/data/talks'
import VueMarkdownIt from 'vue3-markdown-it'

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
