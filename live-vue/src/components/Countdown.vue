<template>
  <div class="countdown">
    <div id="countdown-time" class="countdown-time">
      <span class="hours">{{hours}}</span>:<span class="minutes">{{minutes}}</span><span class="seconds">{{seconds}}</span>
    </div>
    <div class="countdown-bg">
      <img src="/assets/img/live/hackupc-logo.svg" alt="HackUPC logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  data: function () {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
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
      const HACKATHON_DURATION = 36 * 60 * 60;
      const elapsed = this.currentTime - this.countdownStart;
      const current = 36 * 60 * 60 - elapsed;
      if (current > 0 && current < HACKATHON_DURATION) {
        this.seconds = parseInt(current % 60, 10);
        this.minutes = parseInt((current / 60) % 60, 10);
        this.hours = parseInt(current / (60 * 60), 10);
      } else if (current > HACKATHON_DURATION) {
        this.hours = 36;
      }
      this.hours = ('0' + this.hours).slice(-2);
      this.minutes = ('0' + this.minutes).slice(-2);
      this.seconds = ('0' + this.seconds).slice(-2);
    },
  },
  mounted: function () {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
};
</script>

<style scoped>
</style>
