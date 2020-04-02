<template>
  <div id="fullscreen">
    <div>
      <Countdown fullscreen='true'/>
      <div class="events-fancy">
        <Live/>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue';
import Live from '@/views/Live.vue';

export default {
  name: 'FullScreen',
  components: {
    Countdown,
    Live,
  },
};
</script>

<style scoped>
</style>
