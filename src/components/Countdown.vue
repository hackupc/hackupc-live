<template>
  <div
    @click="leaveFullscreen"
    :id="fullscreen ? 'countdown-full' : ''"
    class="countdown"
    :class="{ 'hide-when-small': fullscreen }"
  >
    <div class="countdown__time">
      <span class="hours">{{ hours }}</span
      >:<span class="minutes">{{ minutes }}</span
      ><span class="seconds">{{ seconds }}</span>
    </div>
    <div class="countdown__bg">
      <img src="@/assets/img/hackupc-logo.svg" alt="HackUPC logo" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { addLeadingZero } from '@/services/dates'

export default Vue.extend({
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    countdown() {
      return this.$store.state.countdown
    },
    nowInSeconds() {
      return this.$store.getters.nowInSeconds
    },
    remainingSeconds() {
      if (this.nowInSeconds < this.countdown.start) {
        return this.countdown.end - this.countdown.start
      } else if (this.nowInSeconds > this.countdown.end) {
        return 0
      } else {
        return this.countdown.end - this.nowInSeconds
      }
    },
    hours() {
      return addLeadingZero(this.remainingSeconds / (60 * 60))
    },
    minutes() {
      return addLeadingZero((this.remainingSeconds / 60) % 60)
    },
    seconds() {
      return addLeadingZero(this.remainingSeconds % 60)
    },
  },
  methods: {
    leaveFullscreen: function () {
      // Altought not the best way, this is used to call the first Vue component, however since it is not the $root one, we need to call it's only child (App component)
      if (this.fullscreen) {
        this.$root.$children[0].toggleFullscreen()
      }
    },
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
