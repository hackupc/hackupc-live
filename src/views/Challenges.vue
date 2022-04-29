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
      <Panel title="HackUPC prizes" size="big">
        <div class="prizes-container">
          <div class="prize">
            <h3 class="prize__position">1st</h3>
            <p class="prize__text">Nintendo Switch Lite</p>
            <p class="prize__subtext">(For each team member)</p>
          </div>
          <div class="prize">
            <h3 class="prize__position">2nd</h3>
            <p class="prize__text">Dron IDEA 22</p>
            <p class="prize__subtext">(For each team member)</p>
          </div>
          <div class="prize">
            <h3 class="prize__position">3rd</h3>
            <p class="prize__text">Amazfit GTS</p>
            <p class="prize__subtext">(For each team member)</p>
          </div>
        </div>
      </Panel>

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

.prizes-container {
  display: grid;
  padding: 16px 0;
  grid-template-columns: 1fr 1fr 1fr;
}

.prize {
  text-align: center;

  &__text {
    margin: 0 !important;
    font-size: 1.5em;
    font-weight: bold;
  }

  &__subtext {
    margin: 0 !important;
    color: $text-soft-color;
    font-size: 0.9rem;
    font-weight: normal;
    opacity: 0.6;
  }

  &__position {
    margin: 0 !important;
    color: #aa8e25;
    font-size: 2rem;
  }
}
</style>
