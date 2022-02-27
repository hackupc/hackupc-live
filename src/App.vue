<script setup lang="ts">
import config from '@/config'
import Countdown from '@/components/Countdown.vue'
import Notification from '@/components/Notification.vue'
import DisabledMessage from './components/DisabledMessage.vue'
import Cookies from './components/Cookies.vue'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ExternalLinkIcon } from '@heroicons/vue/solid'
import { useTimeStore } from './stores/time'
import { useScheduleStore } from './stores/schedule'
import { RouterLink } from 'vue-router'

const timeStore = useTimeStore()
const scheduleStore = useScheduleStore()

const router = useRouter()
const route = useRoute()

const isFullscreen = computed(() => route.path === '/fullscreen')
const asideMenuClosed = ref(true)
const asideMenuHidden = ref(true)
const disabled = ref(config.disabled)

setInterval(() => {
  timeStore.refreshTime()
}, 1000) // 1 second

setInterval(() => {
  scheduleStore.refreshSchedule()
}, 1 * 60 * 1000) // 1 minute

onMounted(() => {
  window.addEventListener('keyup', (event) => {
    if (event.key === 'p' || event.key === 'f' || event.key === 'Spacebar') {
      router.push(isFullscreen.value ? '/' : 'fullscreen')
    }
  })
})

const goToFullscreen = () => {
  router.push('fullscreen')
}

const openAsideMenu = (): void => {
  document.body.scrollTop = 0
  document.body.style.overflow = 'hidden'
  asideMenuHidden.value = false
  document.body.classList.add('veil')
  setTimeout(() => {
    asideMenuClosed.value = false
    document.body.classList.add('veiled')
  }, 1)
}

const closeAsideMenu = (): void => {
  document.body.classList.remove('veiled')
  setTimeout(() => {
    document.body.classList.remove('veil')
  }, 1)
  asideMenuClosed.value = true
  setTimeout(() => {
    asideMenuHidden.value = true
  }, 300)
  document.body.style.overflow = 'auto'
}

const isActive = (page: string): boolean => {
  if (page === '/') return route.path === '/'
  return route.path.startsWith(page)
}
</script>

<template>
  <div>
    <div v-if="!disabled">
      <Notification />
      <!--header for <720px-->
      <header v-if="!isFullscreen" id="header-small" class="show-when-small">
        <div class="bar">
          <div id="open-aside-btn" @click="openAsideMenu">
            <span>&#9776;</span>
          </div>
          <div class="title-container">
            <h1 id="title">Live</h1>
          </div>
        </div>
      </header>
      <!--Aside menu for small screens-->
      <aside
        v-if="!asideMenuHidden"
        id="aside-small-menu"
        class="'show-when-small'"
        :class="{
          closed: asideMenuClosed,
        }"
      >
        <div id="close-aside-btn" @click="closeAsideMenu">
          <div>x</div>
        </div>
        <nav>
          <ul>
            <li :class="{ selected: isActive('/') }">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li :class="{ selected: isActive('/live') }">
              <RouterLink to="/live">Live</RouterLink>
            </li>
            <li :class="{ selected: isActive('/schedule') }">
              <RouterLink to="/schedule">Schedule</RouterLink>
            </li>
            <li :class="{ selected: isActive('/activities') }">
              <RouterLink to="/activities">Activities</RouterLink>
            </li>
            <li :class="{ selected: isActive('/challenges') }">
              <RouterLink to="/challenges">Challenges</RouterLink>
            </li>
            <li :class="{ selected: isActive('/talks') }">
              <RouterLink to="/talks">Talks</RouterLink>
            </li>
            <li :class="{ selected: isActive('/rules') }">
              <RouterLink to="/rules">Rules</RouterLink>
            </li>
            <li>
              <a
                href="https://hackupc.com/#faq"
                rel="noopener noreferrer"
                target="_blank"
              >
                FAQ
                <ExternalLinkIcon class="external-link-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <!--header for >720px-->
      <header v-if="!isFullscreen" id="header-nav-bar" class="hide-when-small">
        <nav>
          <ul>
            <li :class="{ selected: isActive('/') }">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li :class="{ selected: isActive('/live') }">
              <RouterLink to="/live">Live</RouterLink>
            </li>
            <li :class="{ selected: isActive('/schedule') }">
              <RouterLink to="/schedule">Schedule</RouterLink>
            </li>
            <li :class="{ selected: isActive('/activities') }">
              <RouterLink to="/activities">Activities</RouterLink>
            </li>
            <li id="countdown-li">
              <countdown @click="goToFullscreen" />
            </li>
            <li :class="{ selected: isActive('/challenges') }">
              <RouterLink to="/challenges">Challenges</RouterLink>
            </li>
            <li :class="{ selected: isActive('/talks') }">
              <RouterLink to="/talks">Talks</RouterLink>
            </li>
            <li :class="{ selected: isActive('/rules') }">
              <RouterLink to="/rules">Rules</RouterLink>
            </li>
            <li>
              <a
                href="https://hackupc.com/#faq"
                rel="noopener noreferrer"
                target="_blank"
              >
                FAQ
                <ExternalLinkIcon class="external-link-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <RouterView />
      </main>
    </div>
    <DisabledMessage v-else />

    <cookies />
  </div>
</template>

<style lang="scss" scoped>
.external-link-icon {
  width: 16px;
  vertical-align: text-top;
}
</style>
