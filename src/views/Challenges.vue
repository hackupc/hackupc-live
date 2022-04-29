<script setup lang="ts">
import IconLabel from '@/components/IconLabel.vue'
import Panel from '@/components/Panel.vue'
import VideoThumbnail from '@/components/VideoThumbnail.vue'
import config from '@/config'
import { challenges } from '@/data/challenges'
import { HashtagIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
import SecretContent from '../components/SecretContent.vue'

const hideChallengesAndPrizes = ref(config.hideChallengesAndPrizes)
</script>

<template>
  <div id="challenges">
    <PanelContainer>
      <template v-for="challenge in challenges" :key="challenge.title">
        <Panel v-if="hideChallengesAndPrizes" :title="challenge.company">
          <IconLabel class="channel" centered>
            <template #icon>
              <HashtagIcon />
            </template>
            {{ challenge.channel }}
          </IconLabel>
          <SecretContent />
        </Panel>

        <Panel v-else :title="challenge.company">
          <IconLabel class="channel" centered>
            <template #icon>
              <HashtagIcon />
            </template>
            {{ challenge.channel }}
          </IconLabel>

          <h3>{{ challenge.title }}</h3>

          <VueMarkdownIt :source="challenge.description" />

          <p>
            <strong>Prize:</strong>
            {{ challenge.prize }}
          </p>

          <VideoThumbnail
            v-if="challenge.videoUrl"
            :video-url="challenge.videoUrl"
          />
        </Panel>
      </template>
    </PanelContainer>
  </div>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.channel {
  margin-bottom: 1em;
}

strong {
  color: $highlight-color;
}
</style>
