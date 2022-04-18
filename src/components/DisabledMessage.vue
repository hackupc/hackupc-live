<script setup lang="ts">
interface Props {
  lightTheme?: boolean
}
defineProps<Props>()
</script>

<template>
  <div class="disabled-msg" :class="{ 'disabled-msg__light': lightTheme }">
    Sorry, live is not available yet. <br />
    Come back later.
  </div>
</template>

<style lang="scss">
.disabled-msg {
  display: flex;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #000;
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: center;
  text-shadow: 0 0 1rem rgb(255 255 255);

  &__light {
    color: #fff;
    text-shadow: none;
  }
}
</style>
