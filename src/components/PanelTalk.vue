<template>
  <panel :title="talk.title">
    <h3 class="talk__speaker">Speaker: {{ talk.speaker }}</h3>
    <div class="embed-container">
      <iframe
        :src="talk.videoUrl"
        class="embed"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </panel>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import Panel from '@/components/Panel.vue'
import { Talk } from '@/data/talks'

export default Vue.extend({
  props: {
    talk: {
      type: Object as PropType<Talk>,
      required: true,
    },
  },
  components: { Panel },
})
</script>

<style lang="scss" scoped>
.talk {
  &__speaker {
    margin-bottom: 24px !important;
  }
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
