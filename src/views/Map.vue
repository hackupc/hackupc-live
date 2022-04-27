<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const currentMap = computed<'indoors' | 'campus' | 'judging'>(() => {
  if (
    route.params?.id !== 'judging' &&
    route.params?.id !== 'campus' &&
    route.params?.id !== 'indoors'
  ) {
    return 'indoors'
  }

  return route.params.id
})
</script>

<template>
  <div class="wrapper">
    <div class="map">
      <img
        v-if="currentMap === 'indoors'"
        class="map__img"
        src="@/assets/img/maps/indoors.svg"
        alt="Indoors Map"
      />
      <img
        v-else-if="currentMap === 'campus'"
        class="map__img"
        src="@/assets/img/maps/campus.svg"
        alt="Campus Map"
      />
      <img
        v-else-if="currentMap === 'judging'"
        class="map__img"
        src="@/assets/img/maps/judging.svg"
        alt="Judging Map"
      />
    </div>

    <div class="explore">
      <p class="explore__title">Explore</p>
      <div class="explore__list">
        <RouterLink
          to="/map/indoors"
          class="button"
          :class="{ 'button--disabled': currentMap === 'indoors' }"
          >Indoors</RouterLink
        >
        <RouterLink
          to="/map/campus"
          class="button"
          :class="{ 'button--disabled': currentMap === 'campus' }"
          >Campus</RouterLink
        >
        <RouterLink
          to="/map/judging"
          class="button"
          :class="{ 'button--disabled': currentMap === 'judging' }"
          >Judging</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/variables' as *;

.wrapper {
  display: grid;
  height: 100vh;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  background: #eee;
  gap: 1rem;
  grid-template: 1fr auto / 1fr;
  text-align: center;
}

.explore {
  &__title {
    margin: 0 0 8px;
  }
}

.button {
  display: inline-block;
  padding: 8px 24px;
  margin: 0 0.2em 16px;
  background: $primary-color;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  color: $contrast-color;
  cursor: pointer;
  font-weight: bold;

  &--disabled {
    filter: grayscale(0.5);
    opacity: 0.4;
    pointer-events: none;
  }
}

.map {
  overflow: auto;
  max-height: 700px;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;

  @media screen and (max-width: 900px) {
    height: 100%;
  }

  &__img {
    display: block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      width: unset;
      max-width: unset;
      height: 100%;
    }
  }
}
</style>
