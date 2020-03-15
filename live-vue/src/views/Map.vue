<template>
  <div id="map" class="under-header padding-bottom">
    <div id="map-legend-floors" class="floors"><span>2</span><span>1</span><span>0</span></div>
    <img src="/assets/img/live/indoors.svg" alt="Indoors Map" id="map-indoors">
    <img src="/assets/img/live/campus.svg" alt="Campus Map" id="map-campus" style="display: none;">
    <img src="/assets/img/live/judging.svg" alt="Judging Map" id="map-judging" style="display: none;">
    <div class="map-button-container">
      <p>Explore:</p>
      <a id="map-button-indoors" href="#/map/indoors" class="disabled">Indoors</a>
      <a id="map-button-campus" href="#/map/campus">Campus</a>
      <a id="map-button-judging" href="#/map/judging">Judging</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
