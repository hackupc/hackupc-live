<script setup lang="ts">
import PanelTalk from '@/components/PanelTalk.vue'
import { talks } from '@/data/talks'
import PanelContainer from '../components/PanelContainer.vue'
import { ref } from 'vue'
import config from '@/config'
import Panel from '@/components/Panel.vue'
import SecretContent from '@/components/SecretContent.vue'
import { challenges } from '@/data/challenges'

const hideChallengesAndPrizes = ref(config.hideChallengesAndPrizes)
</script>

<template>
  <PanelContainer v-if="hideChallengesAndPrizes" id="talks">
    <template v-for="talk in talks" :key="talk.title">
      <Panel>
        <SecretContent />
      </Panel>
    </template>
  </PanelContainer>
  <PanelContainer v-else id="talks">
    <PanelTalk v-for="talk in talks" :key="talk.title" :talk="talk" />
  </PanelContainer>
</template>
