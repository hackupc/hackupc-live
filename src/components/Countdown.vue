<template>
  <div :id="this.isFullscreen ? 'countdown-full' : ''" class="countdown" :class="this.isFullscreen ? 'hide-when-small' : ''">
    <div class="countdown-time">
      <span class="hours">{{hours}}</span>:<span class="minutes">{{minutes}}</span><span class="seconds">{{seconds}}</span>
    </div>
    <div class="countdown-bg">
      <img src="/assets/img/live/hackupc-logo.svg" alt="HackUPC logo">
    </div>
  </div>
</template>

<script>
import Config from '@/config';

export default {
  name: 'Countdown',
  props: ['fullscreen'],
  data: function () {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
      isFullscreen: this.fullscreen,
    };
  },
  computed: {
    countdownStart() {
      return this.$store.getters.countdownStart;
    },
    currentTime() {
      return this.$store.getters.currentTime;
    },
  },
  methods: {
    updateCountdown: function () {
      const HACKATHON_DURATION = Config.hackathon_duration_hours * 60 * 60;
      const elapsed = this.currentTime - this.countdownStart;
      const current = HACKATHON_DURATION - elapsed;
      if (current > 0 && current < HACKATHON_DURATION) {
        this.seconds = parseInt(current % 60, 10);
        this.minutes = parseInt((current / 60) % 60, 10);
        this.hours = parseInt(current / (60 * 60), 10);
      } else if (current > HACKATHON_DURATION) {
        this.hours = Config.hackathon_duration_hours;
      }
      this.hours = ('0' + this.hours).slice(-2);
      this.minutes = ('0' + this.minutes).slice(-2);
      this.seconds = ('0' + this.seconds).slice(-2);
    },
  },
  mounted: function () {
    this.updateCountdown();
    this.interval = setInterval(this.updateCountdown, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
</style>
