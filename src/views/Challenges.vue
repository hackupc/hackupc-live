<template>
  <div id="challenges">
    <div class="container">
      <panel
        v-for="challenge in challenges"
        :key="challenge.title"
        :title="challenge.company"
      >
        <div class="channel">
          <span class="icon"><i class="fab fa-discord"></i></span>
          <span class="highlight-span">{{ challenge.channel }}</span>
        </div>
        <h3>{{ challenge.title }}</h3>
        <vue-markdown-it :source="challenge.description" />
        <p><strong>Prize:</strong> {{ challenge.prize }}</p>
        <video-thumbnail
          v-if="challenge.videoUrl"
          :videoUrl="challenge.videoUrl"
        />
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '@/components/Panel.vue'
import VideoThumbnail from '@/components/VideoThumbnail.vue'
import { challenges } from '@/data/challenges'
import VueMarkdownIt from 'vue3-markdown-it'

export default defineComponent({
  components: {
    Panel,
    VideoThumbnail,
    VueMarkdownIt,
  },

  setup() {
    return {
      challenges,
    }
  },
})
</script>

<style lang="scss" scoped>
.channel {
  text-align: center;
  margin-bottom: 1em;
}
</style>
