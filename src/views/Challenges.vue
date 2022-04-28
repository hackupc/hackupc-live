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
          <div class="secret">
            <div class="secret__title">Secret</div>
            <div class="secret__text">Come back after the opening cerimony</div>
          </div>
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

.secret {
  --title-blur: 3px;
  --text-blur: 1.5px;

  padding: 0 0 1rem;
  color: $text-soft-color;
  cursor: help;
  font-style: italic;
  line-height: 1;
  text-align: center;

  &:hover {
    --title-blur: 0;
    --text-blur: 0;
  }

  &__title {
    margin: 0 0 1rem;
    filter: blur(var(--title-blur, 3px));
    font-size: 3rem;
    font-weight: bold;
    transition: filter ease-out 500ms;
  }

  &__text {
    margin: 0;
    filter: blur(var(--text-blur, 1.5px));
    font-size: 1.5rem;
    transition: filter ease-out 500ms;
  }
}
</style>
