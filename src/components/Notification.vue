<template>
  <div v-if="!this.askedSubscribeAll" class="prompt">
    <div class="prompt__box">
      <h1>{{ prompt.title }}</h1>
      <div v-html="prompt.message"></div>
      <div class="prompt__buttons">
        <div @click="subscribeAll">All right</div>
        <div @click="toggleAskedSubscribeAll">Nope</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      askedSubscribeAll: false,
      prompt: {
        title: 'Notifications for upcoming events',
        message:
          '<p>Do you want to subscribe to all the events? </p>' +
          '<p>You will receive a notification 2 minutes before something happens. </p>' +
          "<p><b>We won't spam you:</b> You can always choose to subscribe or unsubscribe by clicking individually on an event.</p>",
      },
    }
  },
  computed: {
    days() {
      return this.$store.state.schedule.days
    },
    now() {
      return this.$store.getters.now
    },
    subscribed() {
      return this.$store.state.subscribed
    },
  },
  methods: {
    notify: function (body: string, title = 'HackUPC', icon = 'favicon.svg') {
      if (Notification.permission === 'granted') {
        const notification = new Notification(title, {
          body,
          icon,
        })
        setTimeout(() => {
          notification.close()
        }, 7000)
      }
    },
    initPermissions: function () {
      if ('Notification' in window) {
        if (Notification.permission !== 'granted') {
          Notification.requestPermission()
        }
      } else {
        console.warn('This browser does not support desktop notification')
      }
    },
    subscribeAll: function () {
      for (const day of this.days) {
        for (const event of day.events) {
          if (!this.subscribed[event.id]) {
            this.$store.dispatch('toggleSubscribe', event.id)
          }
        }
      }
      this.toggleAskedSubscribeAll()
    },
    toggleAskedSubscribeAll: function () {
      window.localStorage.setItem('notifications', '1')
      this.askedSubscribeAll = true
    },
    getEvent: function (id: string) {
      for (const day of this.days) {
        for (const event of day.events) {
          if (event.id.toString() === id.toString()) return event
        }
      }
      return null
    },
    lookForUpcoming: function () {
      Object.keys(this.subscribed).forEach((eventId) => {
        if (this.subscribed[eventId]) {
          const event = this.getEvent(eventId)
          const offset = event.start.unix() - this.now.unix()
          const EVENT_NOTIF_OFFSET = 5 * 60
          if (offset <= EVENT_NOTIF_OFFSET && offset >= 0) {
            this.notify(event.description, 'Happening soon: ' + event.title)
            this.$store.dispatch('toggleSubscribe', eventId)
          }
        }
      })
    },
  },
  created: function () {
    this.askedSubscribeAll =
      window.localStorage.getItem('notifications') === '1'
    this.initPermissions()
    window.setInterval(this.lookForUpcoming, 1000)
    window.setInterval(() => {
      this.$store.dispatch('getSchedule')
    }, 1 * 60 * 1000) // 1 minute
  },
})
</script>

<style lang="scss" scoped>
.prompt {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 110;
  backdrop-filter: blur(10px);

  &__box {
    color: $secondaryTextColor;
    background-color: $bgColor;
    padding: 20px;
    margin: 20px;
    max-width: 575px;
    border-radius: 5px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    h1 {
      margin: 0;
      padding: 0;
    }
    p {
      margin: 16px 0;
    }
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    div {
      padding: 5px 10px;
      color: $contrastColor;
      background-color: $primaryColor;
      cursor: pointer;
      border-radius: 5px;
      margin-left: 16px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    #promptCancel {
      background-color: #ddd;
      color: #666;
      font-weight: normal;
      letter-spacing: 0;
    }
  }
}
</style>
