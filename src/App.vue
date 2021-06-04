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
              <router-link to="/">Home</router-link>
            </li>
            <li :class="{ selected: isActive('/live') }">
              <router-link to="/live">Live</router-link>
            </li>
            <li :class="{ selected: isActive('/schedule') }">
              <router-link to="/schedule">Schedule</router-link>
            </li>
            <li :class="{ selected: isActive('/activities') }">
              <router-link to="/activities">Activities</router-link>
            </li>
            <li :class="{ selected: isActive('/challenges') }">
              <router-link to="/challenges">Challenges</router-link>
            </li>
            <li :class="{ selected: isActive('/talks') }">
              <router-link to="/talks">Talks</router-link>
            </li>
            <li :class="{ selected: isActive('/rules') }">
              <router-link to="/rules">Rules</router-link>
            </li>
            <li>
              <a
                href="https://hackupc.com/#faq"
                rel="noopener noreferrer"
                target="_blank"
                class="external-link"
                >FAQ</a
              >
            </li>
          </ul>
        </nav>
      </aside>
      <!--header for >720px-->
      <header v-if="!isFullscreen" id="header-nav-bar" class="hide-when-small">
        <nav>
          <ul>
            <li :class="{ selected: isActive('/') }">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="{ selected: isActive('/live') }">
              <router-link to="/live">Live</router-link>
            </li>
            <li :class="{ selected: isActive('/schedule') }">
              <router-link to="/schedule">Schedule</router-link>
            </li>
            <li :class="{ selected: isActive('/activities') }">
              <router-link to="/activities">Activities</router-link>
            </li>
            <li id="countdown-li">
              <countdown @click="goToFullscreen" />
            </li>
            <li :class="{ selected: isActive('/challenges') }">
              <router-link to="/challenges">Challenges</router-link>
            </li>
            <li :class="{ selected: isActive('/talks') }">
              <router-link to="/talks">Talks</router-link>
            </li>
            <li :class="{ selected: isActive('/rules') }">
              <router-link to="/rules">Rules</router-link>
            </li>
            <li>
              <a
                href="https://hackupc.com/#faq"
                rel="noopener noreferrer"
                target="_blank"
                class="external-link"
                >FAQ</a
              >
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
    </div>
    <disabled-message v-else />

    <cookies />
  </div>
</template>

<script lang="ts">
import config from '@/config'
import Countdown from '@/components/Countdown.vue'
import Notification from '@/components/Notification.vue'
import DisabledMessage from './components/DisabledMessage.vue'
import Cookies from './components/Cookies.vue'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  components: {
    Countdown,
    Notification,
    DisabledMessage,
    Cookies,
  },

  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const isFullscreen = computed(() => route.path === '/fullscreen')
    const asideMenuClosed = ref(true)
    const asideMenuHidden = ref(true)
    const disabled = ref(config.disabled)

    setInterval(() => {
      store.dispatch('refreshTime')
    }, 1000)

    window.setInterval(() => {
      store.dispatch('refreshSchedule')
    }, 1 * 60 * 1000) // 1 minute

    onMounted(() => {
      window.addEventListener('keyup', (event) => {
        if (
          event.key === 'p' ||
          event.key === 'f' ||
          event.key === 'Spacebar'
        ) {
          router.push(isFullscreen.value ? '/' : 'fullscreen')
        }
      })
    })

    const goToFullscreen = () => {
      router.push('fullscreen')
    }

    const openAsideMenu = () => {
      document.body.scrollTop = 0
      document.body.style.overflow = 'hidden'
      asideMenuHidden.value = false
      document.body.classList.add('veil')
      setTimeout(() => {
        asideMenuClosed.value = false
        document.body.classList.add('veiled')
      }, 1)
    }

    const closeAsideMenu = () => {
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

    return {
      isFullscreen,
      asideMenuClosed,
      asideMenuHidden,
      disabled,
      goToFullscreen,
      openAsideMenu,
      closeAsideMenu,
      isActive,
    }
  },
})
</script>

<style lang="scss" scoped></style>
