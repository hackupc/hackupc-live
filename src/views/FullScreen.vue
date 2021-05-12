<template>
  <div id="fullscreen">
    <div>
      <Countdown :fullscreen="true" />
      <Live :fullscreen="true" />
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue'
import Live from '@/views/Live.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    Countdown,
    Live,
  },
})
</script>

<style lang="scss" scoped>
#fullscreen {
  position: relative;
  height: 100%;

  & > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

#countdown-full {
  position: absolute;
  width: 33.333vw;
  height: 33.333vw;
  top: calc(50vh - 16.667vw);
  left: 8vw;
  z-index: 50;
  border-radius: 50%;
  box-shadow: 0 4px 42px 0 rgba(0, 0, 0, 0.3);
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  .countdown-time {
    font-size: 7.5vw;
    padding-left: 0;
  }

  .bg {
    position: absolute;
    width: 100%;
    left: 0;
    border-radius: 100%;
    border: 4px solid #5f723f;
    box-sizing: border-box;
  }
}
</style>
