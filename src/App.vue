<script setup lang="ts">
import Notification from '@/components/Notification.vue'
import config from '@/config'
import { computed, onMounted, ref } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import Cookies from './components/Cookies.vue'
import DisabledMessage from './components/DisabledMessage.vue'
import { useScheduleStore } from './stores/schedule'
import { useTimeStore } from './stores/time'

const timeStore = useTimeStore()
const scheduleStore = useScheduleStore()

const router = useRouter()
const route = useRoute()

const isFullscreen = computed(() => route.path === '/fullscreen')
const disabled = ref(config.disabled)

setInterval(() => {
  timeStore.refreshTime()
}, 1000) // 1 second

setInterval(() => {
  scheduleStore.refreshSchedule()
}, 60 * 1000) // 1 minute

onMounted(() => {
  window.addEventListener('keyup', (event) => {
    if (event.key === 'p' || event.key === 'f' || event.key === 'Spacebar') {
      router.push(isFullscreen.value ? '/' : 'fullscreen')
    }
  })
})
</script>

<template>
  <template v-if="!disabled">
    <div class="background" />
    <Notification />
    <AppHeader :is-fullscreen="isFullscreen" />
    <main>
      <RouterView />
    </main>
  </template>
  <DisabledMessage v-else light-theme />

  <cookies />
</template>

<style lang="scss">
@use '@/variables' as *;

body {
  padding: 0;
  margin: 0;
  background-color: $bg-color;
  cursor: url('assets/img/rocket.png'), auto;
  font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.background {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/stars_desktop.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    background-image: url('@/assets/img/stars_mobile.jpg');
  }
}

a {
  color: $links-color;
  cursor: url('assets/img/rocket-fire.png'), auto;
  text-decoration: none;

  &:hover {
    color: $links-color-hover;
  }
}
</style>
