<script setup lang="ts">
import PanelTalk from '@/components/PanelTalk.vue'
import { talks } from '@/data/talks'
import PanelContainer from '../components/PanelContainer.vue'
import { ref } from 'vue'
import config from '@/config'
import Panel from '@/components/Panel.vue'
import SecretContent from '@/components/SecretContent.vue'

const hideChallengesAndPrizes = ref(config.hideChallengesAndPrizes)
</script>

<template>
  <PanelContainer v-if="hideChallengesAndPrizes" id="talks">
    <template v-for="talk in talks" :key="talk.title">
      <Panel
        v-if="talk.isSecret"
        :title="talk.isWorkshop ? 'Workshop' : 'Challenge talk'"
      >
        <SecretContent
          :secret-text="talk.isWorkshop ? 'Comming soon' : undefined"
        />
      </Panel>

      <PanelTalk v-else :talk="talk" />
    </template>
  </PanelContainer>
  <PanelContainer v-else id="talks">
    <PanelTalk v-for="talk in talks" :key="talk.title" :talk="talk" />
  </PanelContainer>
</template>
