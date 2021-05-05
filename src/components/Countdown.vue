<template>
  <div
    @click="leaveFullscreen"
    :id="fullscreen ? 'countdown-full' : ''"
    class="countdown"
    :class="{ 'hide-when-small': fullscreen }"
  >
    <div class="countdown__time">
      <span class="hours">{{ hoursFormatted }}</span
      >:<span class="minutes">{{ minutesFormatted }}</span
      ><span class="seconds">{{ secondsFormatted }}</span>
    </div>
    <div class="countdown__bg">
      <img src="@/assets/img/hackupc-logo.svg" alt="HackUPC logo" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import config from '../config'

export default Vue.extend({
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
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

<style lang="scss" scoped>
.countdown {
  position: absolute;
  width: 100%;
  height: 215px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform $timerAnimLength, box-shadow $timerAnimLength;
  border-radius: 100%;
  box-shadow: 0 -5px 42px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  &__time {
    z-index: 1;
    font-size: 3rem;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-weight: bold;
    padding-left: 0.125em;
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

    .seconds {
      vertical-align: top;
      font-size: 0.6em;
      width: 1.25em;
      display: inline-block;
      text-align: left;
      margin-left: 0.125em;
    }
  }

  &__bg {
    border-radius: 100%;
    border: 12px solid #e5e5e5;
    background: $primaryColor;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 8px;
    z-index: 0;

    img {
      width: 100%;
      opacity: 0.2;
    }
  }
}
</style>
