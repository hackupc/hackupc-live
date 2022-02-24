<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import VideoThumbnail from '@/components/VideoThumbnail.vue'
import IconLabel from '@/components/IconLabel.vue'
import { challenges } from '@/data/challenges'
import VueMarkdownIt from 'vue3-markdown-it'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div id="challenges">
    <div class="container">
      <Panel v-for="challenge in challenges" :key="challenge.title" :title="challenge.company">
        <IconLabel class="channel" :centered="true">
          <template #icon>
            <FontAwesomeIcon :icon="['fab', 'discord']" />
          </template>
          {{ challenge.channel }}
        </IconLabel>
        <h3>{{ challenge.title }}</h3>
        <VueMarkdownIt :source="challenge.description" />
        <p>
          <strong>Prize:</strong>
          {{ challenge.prize }}
        </p>
        <VideoThumbnail v-if="challenge.videoUrl" :video-url="challenge.videoUrl" />
      </Panel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.channel {
  margin-bottom: 1em;
}
</style>
