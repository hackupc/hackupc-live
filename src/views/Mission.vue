<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import config from '@/config'
import { missions } from '@/data/missions'
import { ref } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
import SecretContent from '../components/SecretContent.vue'

const hideMission = ref(config.hideMission)
</script>

<template>
  <PanelContainer id="missions">
    <Panel title="The Mission" size="big"
      >The main goal of <b>HackUPC</b> is not to create a project or win a
      prize, but to have a great time and create lasting memories. It is for
      this reason that we have prepared The Mission. To participate, you only
      need <b>the Mission card</b>, that can be found in your swag bag received
      at check-in. Complete the tasks and <b>win prizes</b> of all kinds!</Panel
    >
    <Panel
      v-for="mission in missions"
      :key="mission.title"
      :title="mission.title"
      :size="mission.size"
    >
      <!--<div
        style="
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        "
      >
        <img :src="mission.picture" style="width: 75%" />
      </div>-->
      <SecretContent v-if="hideMission" />
      <VueMarkdownIt v-else :source="mission.description" />
    </Panel>
  </PanelContainer>
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
