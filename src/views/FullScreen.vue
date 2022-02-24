<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import Live from '@/views/Live.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  document.documentElement.requestFullscreen()
})

onBeforeUnmount(() => {
  document.exitFullscreen?.()
})

const exitFullscreen = () => {
  router.push('/')
}
</script>

<template>
  <div id="fullscreen">
    <div>
      <Countdown :fullscreen="true" @click="exitFullscreen" />
      <Live :fullscreen="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#fullscreen {
  position: relative;
  height: 100%;

  & > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
