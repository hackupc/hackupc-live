<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import Live from '@/components/LiveView.vue'
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
  height: 100%;
  align-items: center;
  justify-content: center;
}

@media (max-width: 720px) {
  .fullscreen {
    flex-direction: column;
  }
}
</style>
