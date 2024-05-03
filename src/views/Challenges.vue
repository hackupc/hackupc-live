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
      <div>
        <blockquote>
          Remember that in HackUPC you can develop whatever you want, it's not
          mandatory to follow a challenge, what it's important is to follow
          <a href="/rules/hRules">HackUPC rules</a>!! One project per team and
          the code can not start before the event.
        </blockquote>
      </div>

      <Panel title="HackUPC prizes" size="big">
        <div class="prizes-container">
          <!--Example of prize:
            <h3 class="prize__position">1st</h3>
            <p class="prize__text">Price</p>
            <p class="prize__subtext">(For each team member)</p> -->
          <div class="prize">
            <SecretContent />
          </div>
          <div class="prize">
            <SecretContent />
          </div>
          <div class="prize">
            <SecretContent />
          </div>
        </div>
      </Panel>

      <template v-for="challenge in challenges" :key="challenge.title">
        <Panel
          v-if="hideChallengesAndPrizes"
          :title="challenge.companyEncrypted"
        >
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
        </Panel>
      </template>
    </PanelContainer>
  </div>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;
@use 'sass:color';

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

blockquote {
  padding: 10px 0 10px 24px;
  border-left: 4px solid $primary-color;
  margin: 1em 2rem;
  background-color: color.adjust($primary-color, $alpha: -0.7);
  border-radius: 0 8px 8px 0;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 1.6;

  a {
    color: $links-color;
    font-weight: bold;

    &:hover {
      color: $links-color-hover;
    }
  }
}
</style>
