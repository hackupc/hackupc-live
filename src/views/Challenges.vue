<template>
  <div id="schedule" class="under-header padding-bottom">
    <div class="container">
      <panel title="Example 1">
        <div>Hola</div>
      </panel>
      <panel title="Example 2">
        <div>Hola que tal</div>
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Panel from '@/components/Panel.vue'

export default Vue.extend({
  components: {
    Panel,
  },
})
</script>

<style lang="scss" scoped>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.prizes-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px 0;

  div {
    text-align: center;

    h3 {
      margin: 0;
      font-size: 2rem;
      color: #aa8e25;
    }
  }
}
</style>
