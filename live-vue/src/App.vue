<template>
  <div>
    <!--header for <720px-->
    <header id="header-small" class="show-when-small">
      <div class="bar">
        <div id="open-aside-btn">
          <span>&#9776;</span>
        </div>
        <div class="title-container">
          <h1 id="title">Live</h1>
        </div>
      </div>
    </header>
    <!--Aside menu for small screens-->
    <aside id="aside-small-menu" class="show-when-small closed hidden">
      <div id="close-aside-btn">
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
    <header id="header-nav-bar" class="hide-when-small">
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
          <li id="countdown-li">
            <div class="countdown">
              <div id="countdown-time" class="countdown-time">
                <span class="hours">36</span>:<span class="minutes">00</span><span class="seconds">00</span>
              </div>
              <div class="countdown-bg">
                <img src="/assets/img/live/hackupc-logo.svg" alt="HackUPC logo">
              </div>
            </div>
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
export default {
  name: 'App',
  methods: {
    isActive: function (page) {
      return this.$route.path.startsWith(page) ? 'selected' : '';
    },
  },
};
</script>

<style>
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
