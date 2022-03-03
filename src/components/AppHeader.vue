<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import { ExternalLinkIcon } from '@heroicons/vue/solid'
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
          <Countdown class="hide-when-small" @click="goToFullscreen" />
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
</template>

<style lang="scss" scoped>
.external-link-icon {
  width: 16px;
  vertical-align: text-top;
}

$fadeTime: 300ms;

.veil::before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  opacity: 0;
  transition: opacity $fadeTime;
}

.veiled::before {
  opacity: 1 !important;
  transition: opacity $fadeTime;
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

#header-small {
  position: fixed;
  width: 100%;
  z-index: 99;

  .bar {
    position: relative;
    height: 50px;
    background-color: $contrastColor;
    color: $secondaryTextColor;
    border-bottom: thin solid rgba(125, 125, 125, 0.3);
    box-shadow: 0 0 10px 0 rgba(125, 125, 125, 0.6);

    .title-container {
      display: flex;
      align-items: center;
      text-align: center;
      height: 100%;
      h1 {
        flex: 1 1 0;
        margin: 0;
        padding: 0;
      }
    }
    #open-aside-btn {
      display: flex;
      position: absolute;
      font-size: 20px;
      color: black;
      align-items: center;
      width: 50px;
      height: 100%;
      text-align: center;
      cursor: pointer;
      /* stylelint-disable */
      span {
        flex: 1 1 0;
      }
      /* stylelint-enable */
    }
  }
}

#aside-small-menu {
  height: 100%;
  position: fixed;
  background-color: $contrastColor;
  width: 200px;
  box-shadow: 0 0 13px 1px rgba(0, 0, 0, 0.6);
  z-index: 150;
  overflow: auto; /* just in case */
  left: 0;
  transition: left 300ms;
  &.closed {
    left: -210px;
  }

  #close-aside-btn {
    display: flex;
    align-items: center;
    text-align: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
    /* stylelint-disable */
    div {
      /* stylelint-enable */
      flex: 1 1 0;
      font-size: 25px;
    }
  }

  div.logo {
    margin-top: 20px;
    text-align: center;
    /* stylelint-disable */
    img {
      width: 90%;
    }
    /* stylelint-enable */
  }
  nav {
    margin-top: 10px;
    background-color: darken($contrastColor, 5%);
    ul {
      list-style: none;
      padding: 0;
      /* stylelint-disable */
      li {
        /* stylelint-enable */
        border-top: thin solid rgba(255, 255, 255, 0.3);
        &.selected {
          font-weight: bold;
          background-color: darken($contrastColor, 15%);
        }
        a {
          display: block;
          padding: 10px 20px;
          color: $textColor;
          text-decoration: none;
        }
      }
    }
  }
}

#header-nav-bar {
  position: fixed;
  width: 100%;
  z-index: 50;
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: center;
    box-shadow: 0 3px 0 transparentize($primaryColor, 0.5);
    li {
      flex: 1 1 0;
      border-left: thin solid rgba(30, 30, 30, 0.2);
      text-align: center;
      background: white;
      a {
        display: block;
        padding: 10px 0;
        color: $textColor;
        text-decoration: none;
      }

      &:first-child {
        border-left: none;
      }

      &.selected {
        box-shadow: 0 3px 0 $primaryColor;
        cursor: default;
      }

      &#countdown-li {
        flex: 0 0 215px;
        position: relative;
        padding: 0;
      }
    }
  }
}
</style>
