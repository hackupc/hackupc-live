<script setup lang="ts">
import PanelTalk from '@/components/PanelTalk.vue'
import { talks } from '@/data/talks'
import PanelContainer from '../components/PanelContainer.vue'
</script>

<template>
  <PanelContainer id="talks">
    <PanelTalk v-for="talk in talks" :key="talk.title" :talk="talk" />
  </PanelContainer>
</template>
