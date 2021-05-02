<template>
  <div
    @click="leaveFullscreen"
    :id="fullscreen ? 'countdown-full' : ''"
    class="countdown"
    :class="{ 'hide-when-small': fullscreen }"
  >
    <div class="countdown-time">
      <span class="hours">{{ hoursFormatted }}</span
      >:<span class="minutes">{{ minutesFormatted }}</span
      ><span class="seconds">{{ secondsFormatted }}</span>
    </div>
    <div class="countdown-bg">
      <img src="@/assets/img/hackupc-logo.svg" alt="HackUPC logo" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import config from '../config'

export default Vue.extend({
  props: ['fullscreen'],
  data: function () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: undefined,
    }
  },
  computed: {
    countdownStart() {
      return this.$store.getters.countdownStart
    },
    currentTime() {
      return this.$store.getters.currentTime
    },
    hoursFormatted() {
      return this.addLeadingZero(this.hours)
    },
    minutesFormatted() {
      return this.addLeadingZero(this.minutes)
    },
    secondsFormatted() {
      return this.addLeadingZero(this.seconds)
    },
  },
  methods: {
    leaveFullscreen: function () {
      // Altought not the best way, this is used to call the first Vue component, however since it is not the $root one, we need to call it's only child (App component)
      if (this.fullscreen) {
        this.$root.$children[0].toggleFullscreen()
      }
    },
    updateCountdown: function () {
      const HACKATHON_DURATION = config.hackathon_duration_hours * 60 * 60
      const elapsed = this.currentTime - this.countdownStart
      const current = HACKATHON_DURATION - elapsed
      if (current > 0 && current < HACKATHON_DURATION) {
        this.seconds = current % 60
        this.minutes = (current / 60) % 60
        this.hours = current / (60 * 60)
      } else if (current > HACKATHON_DURATION) {
        this.hours = config.hackathon_duration_hours
      }
    },
    addLeadingZero: function (n) {
      return ('0' + n).slice(-2)
    },
  },
  mounted: function () {
    this.updateCountdown()
    this.interval = setInterval(this.updateCountdown, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
})
</script>

<style lang="scss" scoped></style>
