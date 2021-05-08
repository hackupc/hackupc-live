<template>
  <div id="talks" class="container">
    <panel-talk v-for="talk in talks" :key="talk.title" :talk="talk" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PanelTalk from '@/components/PanelTalk.vue'
import { talks } from '@/data/talks'

export default Vue.extend({
  components: {
    PanelTalk,
  },
  data() {
    return { talks }
  },
})
</script>

<style lang="scss" scoped></style>
