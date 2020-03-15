<template>
  <div id="fullscreen">
    <div>
      <div id="countdown-full" class="countdown hide-when-small">
        <div class="countdown-time">
          <span class="hours">36</span>:<span class="minutes">00</span><span class="seconds">00</span>
        </div>
        <div class="countdown-bg">
          <img src="/assets/img/live/hackupc-logo.svg" alt="HackUPC logo">
        </div>
      </div>
      <div class="events-fancy">
        <!--To be filled by js-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullScreen',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
