<script setup lang="ts">
import PanelTalk from '@/components/PanelTalk.vue'
import { talks } from '@/data/talks'
</script>

<template>
  <div id="talks" class="container">
    <PanelTalk v-for="talk in talks" :key="talk.title" :talk="talk" />
  </div>
</template>

