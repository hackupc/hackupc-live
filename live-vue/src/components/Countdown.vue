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
      return this.$store.state.currentTime;
    },
  },
  mounted: function () {
    const self = this;
    setInterval(() => {
      const timeNow = Date.now() / 1000;
      const HACKATHON_DURATION = 36 * 60 * 60;
      const elapsed = timeNow - self.countdownStart;
      const current = 36 * 60 * 60 - elapsed;
      if (current > 0 && current < HACKATHON_DURATION) {
        self.seconds = parseInt(current % 60, 10);
        self.minutes = parseInt((current / 60) % 60, 10);
        self.hours = parseInt(current / (60 * 60), 10);
      } else if (current > HACKATHON_DURATION) {
        self.hours = 36;
      }
      self.hours = ('0' + self.hours).slice(-2);
      self.minutes = ('0' + self.minutes).slice(-2);
      self.seconds = ('0' + self.seconds).slice(-2);
    }, 1000);
  },
};
</script>

<style scoped>
</style>
