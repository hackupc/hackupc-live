<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Tooltip } from 'ant-design-vue'

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
      <div class="countdown-text" @click="goToFullscreen">
        <span>Full screen</span>
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
          <RouterLink to="/" @click="closeAsideMenu"
            ><FontAwesomeIcon icon="home" size="sm" style="margin-right: 5px" />
            Home</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/schedule') }">
          <RouterLink to="/schedule" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="calendar-days"
              size="sm"
              style="margin-right: 5px"
            />
            Schedule & Live
          </RouterLink>
        </li>
        <li :class="{ selected: isActive('/map') }">
          <RouterLink to="/map" @click="closeAsideMenu">
            <FontAwesomeIcon
              icon="map-location-dot"
              size="sm"
              style="margin-right: 5px"
            />
            Map
          </RouterLink>
        </li>
        <li :class="{ selected: isActive('/mission') }">
          <RouterLink to="/mission" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="user-secret"
              size="sm"
              style="margin-right: 5px"
            />
            Mission</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/mentors') }">
          <RouterLink to="/mentors" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="chalkboard-teacher"
              size="sm"
              style="margin-right: 5px"
            />
            Mentors</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/meals') }">
          <RouterLink to="/meals" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="utensils"
              size="sm"
              style="margin-right: 5px"
            />
            Meals</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/talks') }">
          <RouterLink to="/talks" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="message"
              size="sm"
              style="margin-right: 5px"
            />
            Talks & Workshops</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/challenges') }">
          <RouterLink to="/challenges" @click="closeAsideMenu"
            ><FontAwesomeIcon icon="code" size="sm" style="margin-right: 5px" />
            Challenges</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/activities') }">
          <RouterLink to="/activities" @click="closeAsideMenu"
            ><FontAwesomeIcon icon="dice" size="sm" style="margin-right: 5px" />
            Activities</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/rules') }">
          <RouterLink to="/rules" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="gavel"
              size="sm"
              style="margin-right: 5px"
            />
            Judging & Rules</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/travel') }">
          <RouterLink to="/travel" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="plane"
              size="sm"
              style="margin-right: 5px"
            />
            Discover BCN & Travel policies</RouterLink
          >
        </li>
        <li :class="{ selected: isActive('/faq') }">
          <RouterLink to="/faq" @click="closeAsideMenu"
            ><FontAwesomeIcon
              icon="circle-question"
              size="sm"
              style="margin-right: 5px"
            />
            Help</RouterLink
          >
        </li>
      </ul>
    </nav>
  </aside>
  <!--header for >720px-->
  <header v-if="!isFullscreen" class="header-nav-bar hide-when-small">
    <nav>
      <ul class="header-nav-bar__list">
        <Tooltip title="Home" class="cursor-is-rocket">
          <RouterLink
            to="/"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/') }"
          >
            <li>
              <FontAwesomeIcon icon="home" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Schedule & Live" class="cursor-is-rocket">
          <RouterLink
            to="/schedule"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/schedule') }"
          >
            <li>
              <FontAwesomeIcon icon="calendar-days" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Map" class="cursor-is-rocket">
          <RouterLink
            to="/map"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/map') }"
          >
            <li>
              <FontAwesomeIcon icon="map-location-dot" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Mission" class="cursor-is-rocket">
          <RouterLink
            to="/mission"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/mission') }"
          >
            <li>
              <FontAwesomeIcon icon="user-secret" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Mentors" class="cursor-is-rocket">
          <RouterLink
            to="/mentors"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/mentors') }"
          >
            <li>
              <FontAwesomeIcon icon="chalkboard-teacher" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Meals" class="cursor-is-rocket">
          <RouterLink
            to="/meals"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/meals') }"
          >
            <li>
              <FontAwesomeIcon icon="utensils" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Live full screen" class="cursor-is-rocket">
          <li
            class="header-nav-bar__item header-nav-bar__item--countdown cursor-is-rocket"
          >
            <Countdown class="hide-when-small" @click="goToFullscreen" />
          </li>
        </Tooltip>

        <Tooltip title="Talks & Workshops" class="cursor-is-rocket">
          <RouterLink
            to="/talks"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/talks') }"
          >
            <li>
              <FontAwesomeIcon icon="message" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Challenges" class="cursor-is-rocket">
          <RouterLink
            to="/challenges"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/challenges') }"
          >
            <li>
              <FontAwesomeIcon icon="code" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>

        <Tooltip title="Activities" class="cursor-is-rocket">
          <RouterLink
            to="/activities"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/activities') }"
          >
            <li>
              <FontAwesomeIcon icon="dice" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>
        <Tooltip title="Judging & rules" class="cursor-is-rocket">
          <RouterLink
            to="/rules"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/rules') }"
          >
            <li>
              <FontAwesomeIcon icon="gavel" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>
        <Tooltip
          title="Discover BCN & Travel policies"
          class="cursor-is-rocket"
        >
          <RouterLink
            to="/travel"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/travel') }"
          >
            <li>
              <FontAwesomeIcon icon="plane" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>
        <Tooltip title="Help" class="cursor-is-rocket">
          <RouterLink
            to="/faq"
            class="header-nav-bar__item"
            :class="{ selected: isActive('/faq') }"
          >
            <li>
              <FontAwesomeIcon icon="circle-question" size="lg" />
            </li>
          </RouterLink>
        </Tooltip>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/variables' as *;

$fade-time: 300ms;

.cursor-is-rocket {
  cursor: url('../assets/img/rocket-fire.png'), auto !important;
}

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
    height: 60px;
    border-bottom: thin solid rgb(125 125 125 / 30%);
    background-color: $header-mobile-bg-color;
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

.countdown-text {
  position: absolute;
  top: 0;
  right: 5px;
  display: flex;
  width: 50px;
  height: 100%;
  align-items: center;
  margin-right: 10px;
  color: #fff;
  cursor: url('../assets/img/rocket-fire.png'), auto;
  font-size: 15px;
  text-align: center;
}

.open-aside-btn {
  position: absolute;
  display: flex;
  width: 50px;
  height: 100%;
  align-items: center;
  color: #fff;
  cursor: url('../assets/img/rocket-fire.png'), auto;
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
  background-color: $header-mobile-bg-color;
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
    color: #fff;
    cursor: url('../assets/img/rocket-fire.png'), auto;
    text-align: center;

    div {
      flex: 1 1 0;
      font-size: 25px;
    }
  }

  nav {
    margin-top: 10px;
    background-color: color.adjust($header-mobile-bg-color, $lightness: -5%);
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    border-top: thin solid rgb(255 255 255 / 30%);
  }

  .selected {
    background-color: color.adjust($header-mobile-bg-color, $lightness: -15%);
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
  align-content: center;

  &__list {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    box-shadow: 0 3px 0 color.adjust($primary-color, $alpha: -0.5);
    list-style: none;
  }

  &__item {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    border-left: thin solid rgb(30 30 30 / 20%);
    background: $header-desktop-bg-color;
    text-align: center;

    :first-child {
      border-left: 0;
    }

    &--countdown {
      position: relative;
      display: block;
      flex: 0 0 215px;
      padding: 0;
    }
  }

  a {
    padding: 15px 5px;
    color: $text-color;
    text-decoration: none;
  }

  .selected {
    box-shadow: 0 3px 0 $primary-color;
    cursor: default;
  }

  .link {
    display: block;

    &__icon {
      height: 20px;
      margin-right: 0.25rem;
      color: #0c0c0c;
      vertical-align: -4px;
    }
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
