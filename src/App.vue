<template>
  <div>
    <div v-if="!disabled">
      <Notification />
      <!--header for <720px-->
      <header
        id="header-small"
        :class="[this.isFullscreen ? 'hidden' : '', 'show-when-small']"
      >
        <div class="bar">
          <div @click="openAsideMenu" id="open-aside-btn">
            <span>&#9776;</span>
          </div>
          <div class="title-container">
            <h1 id="title">Live</h1>
          </div>
        </div>
      </header>
      <!--Aside menu for small screens-->
      <aside
        id="aside-small-menu"
        :class="[
          this.asideMenuClosed ? 'closed' : '',
          this.asideMenuHidden ? 'hidden' : '',
          'show-when-small',
        ]"
      >
        <div @click="closeAsideMenu" id="close-aside-btn">
          <div>x</div>
        </div>
        <nav>
          <ul>
            <li :class="$route.path === '/' ? 'selected' : ''">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="isActive('/live')">
              <router-link to="/live">Live</router-link>
            </li>
            <li :class="isActive('/schedule')">
              <router-link to="/schedule">Schedule</router-link>
            </li>
            <li :class="isActive('/challenges')">
              <router-link to="/challenges">Challenges</router-link>
            </li>
            <li :class="isActive('/talks')">
              <router-link to="/talks">Talks</router-link>
            </li>
            <li :class="isActive('/rules')">
              <router-link to="/rules">Rules</router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <!--header for >720px-->
      <header
        id="header-nav-bar"
        :class="[this.isFullscreen ? 'hidden' : '', 'hide-when-small']"
      >
        <nav>
          <ul>
            <li :class="$route.path === '/' ? 'selected' : ''">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="isActive('/live')">
              <router-link to="/live">Live</router-link>
            </li>
            <li :class="isActive('/schedule')">
              <router-link to="/schedule">Schedule</router-link>
            </li>
            <li @click="toggleFullscreen" id="countdown-li">
              <Countdown />
            </li>
            <li :class="isActive('/challenges')">
              <router-link to="/challenges">Challenges</router-link>
            </li>
            <li :class="isActive('/talks')">
              <router-link to="/talks">Talks</router-link>
            </li>
            <li :class="isActive('/rules')">
              <router-link to="/rules">Rules</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <transition name="fade">
          <router-view />
        </transition>
      </main>
    </div>
    <disabled-message v-else />

    <cookies />
  </div>
</template>

<script>
import config from '@/config'
import Countdown from '@/components/Countdown.vue'
import Notification from '@/components/Notification.vue'
import DisabledMessage from './components/DisabledMessage.vue'
import Cookies from './components/Cookies.vue'
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      isFullscreen: false,
      asideMenuClosed: true,
      asideMenuHidden: true,
      disabled: config.disabled,
    }
  },
  methods: {
    toggleFullscreen: function () {
      document.body.classList.add('faded')
      this.$router.push(this.isFullscreen ? '/' : 'fullscreen')
      setTimeout(() => {
        document.body.classList.remove('faded')
        if (this.isFullscreen) {
          document.exitFullscreen()
        } else {
          document.documentElement.requestFullscreen()
        }
        this.isFullscreen = !this.isFullscreen
      }, 300)
    },
    openAsideMenu: function () {
      document.body.scrollTop = 0
      document.body.style.overflow = 'hidden'
      this.asideMenuHidden = false
      document.body.classList.add('veil')
      setTimeout(() => {
        this.asideMenuClosed = false
        document.body.classList.add('veiled')
      }, 1)
    },
    closeAsideMenu: function () {
      document.body.classList.remove('veiled')
      setTimeout(() => {
        document.body.classList.remove('veil')
      }, 1)
      this.asideMenuClosed = true
      setTimeout(() => {
        this.asideMenuHidden = true
      }, 300)
      document.body.style.overflow = 'auto'
    },
    isActive: function (page) {
      return this.$route.path.startsWith(page) ? 'selected' : ''
    },
  },
  created: function () {
    this.interval = setInterval(() => {
      this.$store.dispatch('updateCurrentTime', Date.now())
    }, 1000)
  },
  mounted: function () {
    this.$store.dispatch('getSubscribed')
    this.$store.dispatch('getSchedule')
    window.addEventListener('keyup', (event) => {
      const key = event.which
      if (key === 80 || key === 70 || key === 32) {
        this.toggleFullscreen()
      }
    })
  },
  components: {
    Countdown,
    Notification,
    DisabledMessage,
    Cookies,
  },
})
</script>

<style lang="scss" scoped></style>
