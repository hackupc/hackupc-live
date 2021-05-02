<template>
  <div class="disabled-msg">
    Sorry, live is not available yet. <br />
    Come back later.
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.disabled-msg {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  font-weight: bolder;
  text-shadow: 0 0 1rem rgb(255, 255, 255);
}
</style>
