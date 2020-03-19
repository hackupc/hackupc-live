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
  data: function () {
    return {
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
      return this.$store.state.days;
    },
    currentTime() {
      return this.$store.state.currentTime;
    },
    subscribed() {
      return this.$store.state.subscribed;
    },
    askedSubscribeAll() {
      return this.$store.state.askedSubscribeAll;
    },
  },
  methods: {
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
  mounted: function () {
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
