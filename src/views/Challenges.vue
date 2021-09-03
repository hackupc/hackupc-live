<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '@/components/Panel.vue'
import VideoThumbnail from '@/components/VideoThumbnail.vue'
import IconLabel from '@/components/IconLabel.vue'
import { challenges } from '@/data/challenges'
import VueMarkdownIt from 'vue3-markdown-it'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  components: {
    Panel,
    IconLabel,
    VideoThumbnail,
    VueMarkdownIt,
    FontAwesomeIcon,
  },

  setup() {
    return {
      challenges,
    }
  },
})
</script>

<template>
  <div id="challenges">
    <div class="container">
      <panel
        v-for="challenge in challenges"
        :key="challenge.title"
        :title="challenge.company"
      >
        <icon-label class="channel" :centered="true">
          <template #icon>
            <font-awesome-icon :icon="['fab', 'discord']" />
          </template>
          {{ challenge.channel }}
        </icon-label>
        <h3>{{ challenge.title }}</h3>
        <vue-markdown-it :source="challenge.description" />
        <p><strong>Prize:</strong> {{ challenge.prize }}</p>
        <video-thumbnail
          v-if="challenge.videoUrl"
          :video-url="challenge.videoUrl"
        />
      </panel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.channel {
  margin-bottom: 1em;
}
</style>
