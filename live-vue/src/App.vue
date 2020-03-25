<template>
  <div>
    <Notification/>
    <!--header for <720px-->
    <header id="header-small" :class="[this.isFullscreen ? 'hidden' : '', 'show-when-small']">
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
    <aside id="aside-small-menu" :class="[this.asideMenuClosed ? 'closed' : '', this.asideMenuHidden ? 'hidden' : '', 'show-when-small']">
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
          <li :class="isActive('/map')">
            <router-link to="/map">Map</router-link>
          </li>
          <li :class="isActive('/mentors')">
            <a href="https://mentors.hackupc.com/" target="_blank">Mentors</a>
            <!--<router-link to="/mentors">Mentors</router-link>-->
          </li>
          <li :class="isActive('/streaming')">
            <router-link to="/streaming">Streaming</router-link>
          </li>
          <li :class="isActive('/challenges')">
            <router-link to="/challenges">Challenges</router-link>
          </li>
          <li>
            <a href="https://guides.hackupc.com/guide/hacker" target="_blank">Guides</a>
          </li>
          <li :class="isActive('/rules')">
            <router-link to="/rules">Rules</router-link>
          </li>
          <li :class="isActive('/faq')">
            <router-link to="/faq">FAQ</router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <!--header for >720px-->
    <header id="header-nav-bar" :class="[this.isFullscreen ? 'hidden' : '', 'hide-when-small']">
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
          <li :class="isActive('/map')">
            <router-link to="/map">Map</router-link>
          </li>
          <li :class="isActive('/mentors')">
            <a href="https://mentors.hackupc.com/" target="_blank">Mentors</a>
            <!--<router-link to="/mentors">Mentors</router-link>-->
          </li>
          <li @click="toggleFullscreen" id="countdown-li">
            <Countdown/>
          </li>
          <li :class="isActive('/streaming')">
            <router-link to="/streaming">Streaming</router-link>
          </li>
          <li :class="isActive('/challenges')">
            <router-link to="/challenges">Challenges</router-link>
          </li>
          <li>
            <a href="https://guides.hackupc.com/guide/hacker" target="_blank">Guides</a>
          </li>
          <li :class="isActive('/rules')">
            <router-link to="/rules">Rules</router-link>
          </li>
          <li :class="isActive('/faq')">
            <router-link to="/faq">FAQ</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue';
import Notification from '@/components/Notification.vue';

export default {
  name: 'App',
  data: function () {
    return {
      isFullscreen: false,
      asideMenuClosed: true,
      asideMenuHidden: true,
    };
  },
  methods: {
    toggleFullscreen: function () {
      document.body.classList.add('faded');
      const self = this;
      setTimeout(() => {
        document.body.classList.remove('faded');
        if (self.isFullscreen) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
        self.isFullscreen = !self.isFullscreen;
      }, 300);
    },
    openAsideMenu: function () {
      document.body.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      this.asideMenuHidden = false;
      document.body.classList.add('veil');
      setTimeout(() => {
        this.asideMenuClosed = false;
        document.body.classList.add('veiled');
      }, 1);
    },
    closeAsideMenu: function () {
      document.body.classList.remove('veiled');
      setTimeout(() => {
        document.body.classList.remove('veil');
      }, 1);
      this.asideMenuClosed = true;
      setTimeout(() => {
        this.asideMenuHidden = true;
      }, 300);
      document.body.style.overflow = 'auto';
    },
    isActive: function (page) {
      return this.$route.path.startsWith(page) ? 'selected' : '';
    },
  },
  created: function () {
    this.interval = setInterval(() => {
      this.$store.dispatch('updateCurrentTime', Date.now());
    }, 1000);
  },
  mounted: function () {
    window.addEventListener('keypress', (event) => {
      const key = String.fromCharCode(event.which);
      if (key === 'p' || key === 'f' || key === ' ') {
        this.toggleFullscreen();
      }
    });
    this.$store.dispatch('getSchedule');
  },
  components: {
    Countdown,
    Notification,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/live";
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
