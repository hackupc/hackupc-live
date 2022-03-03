<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import Live from '@/views/Live.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(async () => {
  await document.documentElement.requestFullscreen()
})

onBeforeUnmount(async () => {
  await document.exitFullscreen()
})

const exitFullscreen = () => {
  router.push('/')
}
</script>

<template class="fullscreen">
  <Countdown fullscreen @click="exitFullscreen" />
  <Live fullscreen />
</template>

<style lang="scss" scoped>
.fullscreen {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
