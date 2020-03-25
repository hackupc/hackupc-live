<template>
  <div>
    <div v-if="!this.askedSubscribeAll" class="prompt">
      <div class="box">
        <h1>{{prompt.title}}</h1>
        <div v-html="prompt.message"></div>
        <div class="buttons">
          <div @click="subscribeAll">All right</div>
          <div @click="toggleAskedSubscribeAll">Nope</div>
        </div>
      </div>
    </div>
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

export default {
  name: 'App',
  data: function () {
    return {
      isFullscreen: false,
      asideMenuClosed: true,
      asideMenuHidden: true,
      prompt: {
        title: 'Notifications for upcoming events',
        message: '<p>Do you want to subscribe to all the events? </p>'
        + '<p>You will receive a notification 2 minutes before something happens. </p>'
        + '<p><b>We won\'t spam you:</b> You can always choose to subscribe or unsubscribe by clicking individually on an event.</p>',
      },
    };
  },
  computed: {
    days() {
      return this.$store.state.schedule.days;
    },
    currentTime() {
      return this.$store.getters.currentTime;
    },
    subscribed() {
      return this.$store.state.subscribed;
    },
    askedSubscribeAll() {
      return this.$store.state.askedSubscribeAll;
    },
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
    getEvent: function (id) {
      for (const day of this.days) {
        for (const event of day.events) {
          if (event.id.toString() === id.toString()) return event;
        }
      }
      return null;
    },
    isActive: function (page) {
      return this.$route.path.startsWith(page) ? 'selected' : '';
    },
    notify: function (msg, title, icon, cb) {
      const ntitle = title || 'HackUPC 2020';
      const notification = new Notification(ntitle, {
        body: msg,
        icon: icon || 'favicon.ico',
      });
      setTimeout(() => {
        notification.close();
      }, 7000);
    },
    initPermissions: function () {
      if ('Notification' in window) {
        if (Notification.permission !== 'granted') {
          Notification.requestPermission((permission) => {
            if (permission === 'granted') this.$store.dispatch('canNotify', true);
          });
        }
      } else {
        console.warn('This browser does not support desktop notification');
      }
    },
    subscribeAll: function (evt) {
      for (const day of this.days) {
        for (const event of day.events) {
          if (!this.subscribed[event.id]) {
            this.$store.dispatch('toggleSubscribe', event.id);
          }
        }
      }
      this.toggleAskedSubscribeAll();
    },
    toggleAskedSubscribeAll: function (event) {
      this.$store.dispatch('isSubscribedAll', true);
    },
  },
  created: function () {
    this.interval = setInterval(() => {
      this.$store.dispatch('updateCurrentTime', Date.now());
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted: function () {
    window.addEventListener('keypress', (event) => {
      const key = String.fromCharCode(event.which);
      if (key === 'p' || key === 'f' || key === ' ') {
        this.toggleFullscreen();
      }
    });
    this.$store.dispatch('getSchedule');
    window.setInterval(() => {
      this.$store.dispatch('getSchedule', () => {
        this.notify('', 'Schedule has changed!');
      });
    }, 5000);
    this.initPermissions();
    const subscribed = this.subscribed;
    window.setInterval(() => {
      Object.keys(subscribed).forEach((eventId) => {
        if (subscribed[eventId]) {
          const event = this.getEvent(eventId);
          const offset = event.startTmsp - this.currentTime;
          const EVENT_NOTIF_OFFSET = 5 * 60;
          if (offset <= EVENT_NOTIF_OFFSET && offset >= 0) {
            this.notify(event.description, 'Happening soon: ' + event.title);
            this.$store.dispatch('toggleSubscribe', eventId);
          }
        }
      });
    }, 1000);
  },
  components: {
    Countdown,
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
