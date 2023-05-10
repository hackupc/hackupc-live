<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

interface Props {
  isFullscreen: boolean
}
defineProps<Props>()

const router = useRouter()
const route = useRoute()

const asideMenuClosed = ref(true)
const asideMenuHidden = ref(true)

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
  <!--header for <720px-->
  <header v-if="!isFullscreen" class="header-small show-when-small">
    <div class="header-small__bar">
      <div class="open-aside-btn" @click="openAsideMenu">
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
    class="aside-small-menu show-when-small"
    :class="{
      closed: asideMenuClosed,
    }"
  >
    <div class="close-aside-btn" @click="closeAsideMenu">
      <div>x</div>
    </div>
    <nav>
      <ul>
        <li :class="{ selected: isActive('/') }">
          <RouterLink to="/" @click="closeAsideMenu">Home</RouterLink>
        </li>
        <li :class="{ selected: isActive('/live') }">
          <RouterLink to="/live" @click="closeAsideMenu">Live</RouterLink>
        </li>
        <li :class="{ selected: isActive('/schedule') }">
          <RouterLink to="/schedule" @click="closeAsideMenu"
            >Schedule</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/map') }">
          <RouterLink to="/map" @click="closeAsideMenu">Map</RouterLink>
        </li>
        <li :class="{ selected: isActive('/mission') }">
          <RouterLink to="/mission" @click="closeAsideMenu">Mission</RouterLink>
        </li>
        <li :class="{ selected: isActive('/challenges') }">
          <RouterLink to="/challenges" @click="closeAsideMenu"
            >Challenges</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/talks') }">
          <RouterLink to="/talks" @click="closeAsideMenu">Talks</RouterLink>
        </li>
        <li :class="{ selected: isActive('/hardware') }">
          <RouterLink to="/hardware" @click="closeAsideMenu">Hardware</RouterLink>
        </li>
        <li :class="{ selected: isActive('/rules') }">
          <RouterLink to="/rules" @click="closeAsideMenu">Rules</RouterLink>
        </li>
        <li :class="{ selected: isActive('/faq') }">
          <RouterLink to="/faq" @click="closeAsideMenu">FAQ</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
  <!--header for >720px-->
  <header v-if="!isFullscreen" class="header-nav-bar hide-when-small">
    <nav>
      <ul class="header-nav-bar__list">
        <li class="header-nav-bar__item" :class="{ selected: isActive('/') }">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/live') }"
        >
          <RouterLink to="/live">Live</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/schedule') }"
        >
          <RouterLink to="/schedule">Schedule</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/map') }"
        >
          <RouterLink to="/map">Map</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/mission') }"
        >
          <RouterLink to="/mission">Mission</RouterLink>
        </li>
        <li class="header-nav-bar__item header-nav-bar__item--countdown">
          <Countdown class="hide-when-small" @click="goToFullscreen" />
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/challenges') }"
        >
          <RouterLink to="/challenges">Challenges</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/talks') }"
        >
          <RouterLink to="/talks">Talks</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/hardware') }"
        >
          <RouterLink to="/hardware">Hardware</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/rules') }"
        >
          <RouterLink to="/rules">Rules</RouterLink>
        </li>
        <li
          class="header-nav-bar__item"
          :class="{ selected: isActive('/faq') }"
        >
          <RouterLink to="/faq">FAQ</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/variables' as *;

$fade-time: 300ms;

.external-link-icon {
  width: 16px;
  vertical-align: text-top;
}

.veil::before {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 40%);
  content: ' ';
  opacity: 0;
  transition: opacity $fade-time;
}

.veiled::before {
  opacity: 1 !important;
  transition: opacity $fade-time;
}

.header-small {
  position: fixed;
  z-index: 99;
  width: 100%;

  &__bar {
    position: relative;
    height: 50px;
    border-bottom: thin solid rgb(125 125 125 / 30%);
    background-color: $contrast-color;
    box-shadow: 0 0 10px 0 rgb(125 125 125 / 60%);
    color: $secondary-text-color;
  }
}

.title-container {
  display: flex;
  height: 100%;
  align-items: center;
  text-align: center;

  h1 {
    flex: 1 1 0;
    padding: 0;
    margin: 0;
  }
}

.open-aside-btn {
  position: absolute;
  display: flex;
  width: 50px;
  height: 100%;
  align-items: center;
  color: #000;
  cursor: pointer;
  font-size: 20px;
  text-align: center;

  span {
    flex: 1 1 0;
  }
}

.aside-small-menu {
  position: fixed;
  z-index: 150;
  left: 0;
  overflow: auto; /* just in case */
  width: 200px;
  height: 100%;
  background-color: $contrast-color;
  box-shadow: 0 0 13px 1px rgb(0 0 0 / 60%);
  transition: left 300ms;

  &.closed {
    left: -210px;
  }

  .close-aside-btn {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    cursor: pointer;
    text-align: center;

    div {
      flex: 1 1 0;
      font-size: 25px;
    }
  }

  nav {
    margin-top: 10px;
    background-color: color.adjust($contrast-color, $lightness: -5%);
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    border-top: thin solid rgb(255 255 255 / 30%);
  }

  .selected {
    background-color: color.adjust($contrast-color, $lightness: -15%);
    font-weight: bold;
  }

  a {
    display: block;
    padding: 10px 20px;
    color: $text-color;
    text-decoration: none;
  }
}

.header-nav-bar {
  position: fixed;
  z-index: 50;
  width: 100%;

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0;
    box-shadow: 0 3px 0 color.adjust($primary-color, $alpha: -0.5);
    list-style: none;
  }

  &__item {
    flex: 1 1 0;
    border-left: thin solid rgb(30 30 30 / 20%);
    background: #fff;
    text-align: center;

    :first-child {
      border-left: 0;
    }

    &--countdown {
      position: relative;
      flex: 0 0 215px;
      padding: 0;
    }
  }

  a {
    display: block;
    padding: 10px 0;
    color: $text-color;
    text-decoration: none;
  }

  .selected {
    box-shadow: 0 3px 0 $primary-color;
    cursor: default;
  }
}

@media (min-width: 720px) {
  .show-when-small {
    display: none !important;
  }
}

@media (max-width: 720px) {
  .hide-when-small {
    display: none !important;
  }
}
</style>
