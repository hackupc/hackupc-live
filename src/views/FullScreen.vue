<script lang="ts">
import Countdown from '@/components/Countdown.vue'
import Live from '@/views/Live.vue'
import { defineComponent, onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Countdown,
    Live,
  },
  setup() {
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

    return {
      exitFullscreen,
    }
  },
})
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
