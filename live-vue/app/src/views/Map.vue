<template>
  <div id="map" class="under-header padding-bottom">
    <img src="/assets/img/live/indoors.svg" alt="Indoors Map" :style="getStyle('indoors')">
    <img src="/assets/img/live/campus.svg" alt="Campus Map" :style="getStyle('campus')">
    <img src="/assets/img/live/judging.svg" alt="Judging Map" :style="getStyle('judging')">
    <div class="map-button-container">
      <p>Explore:</p>
      <router-link to="/map/indoors" :class="getClass('indoors')">Indoors</router-link>
      <router-link to="/map/campus" :class="getClass('campus')">Campus</router-link>
      <router-link to="/map/judging" :class="getClass('judging')">Judging</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  computed: {
    locations() {
      return ['indoors', 'campus', 'judging'];
    },
  },
  methods: {
    getClass(location) {
      if (this.$route.params.location == null && location === 'indoors') return 'disabled';
      if (!this.locations.includes(this.$route.params.location) && location === 'indoors') return 'disabled';
      return this.$route.params.location === location ? 'disabled' : '';
    },
    getStyle(location) {
      if (this.$route.params.location == null && location === 'indoors') return '';
      if (!this.locations.includes(this.$route.params.location) && location === 'indoors') return '';
      return this.$route.params.location === location ? '' : 'display: none;';
    },
  },
};
</script>

<style scoped>
</style>
