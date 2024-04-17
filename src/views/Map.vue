<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const route = useRoute()

const currentMap = computed<'indoors' | 'campus' | 'judging'>(() => {
  if (
    route.params?.mapId !== 'judging' &&
    route.params?.mapId !== 'campus' &&
    route.params?.mapId !== 'indoors'
  ) {
    return 'indoors'
  }

  return route.params.mapId
})
</script>

<template>
  <div class="wrapper">
    <div class="explore">
      <a
        href="https://maps.app.goo.gl/AKazP14LMy7LZoZq8"
        target="_blank"
        rel="noopener noreferrer"
        class="button"
      >
        <FontAwesomeIcon icon="map-location-dot" style="margin-right: 4px" />
        Link to Google Maps
      </a>
      <div class="explore__maps-buttons">
        <RouterLink
          :to="{
            name: 'map',
            params: { mapId: 'indoors' },
          }"
          class="button"
          :class="{ 'button--disabled': currentMap === 'indoors' }"
          >Indoors</RouterLink
        >
        <RouterLink
          :to="{
            name: 'map',
            params: { mapId: 'campus' },
          }"
          class="button"
          :class="{ 'button--disabled': currentMap === 'campus' }"
          >Campus</RouterLink
        >
        <RouterLink
          :to="{
            name: 'map',
            params: { mapId: 'judging' },
          }"
          class="button"
          :class="{ 'button--disabled': currentMap === 'judging' }"
          >Judging</RouterLink
        >
      </div>
    </div>
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
  </div>
</template>

<style lang="scss">
@use '@/variables' as *;

.wrapper {
  display: grid;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 100px 0 0;
  margin: 0 auto;
  gap: 1rem;
  grid-template: 1fr auto / 1fr;
  text-align: center;

  @media screen and (max-width: 900px) {
    height: 100vh;
  }
}

.explore {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 60px;
  margin-left: 60px;

  &__maps-buttons {
    gap: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    display: block;
    margin: 0;
  }
}

.button {
  display: inline-block;
  padding: 8px 24px;
  margin: 0 0.2em 16px;
  background: $links-color;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  color: #000;
  cursor: url('../assets/img/rocket-fire.png'), auto;
  font-weight: bold;

  &--disabled {
    filter: grayscale(0.5);
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    background: $links-color-hover;
    color: #fff;
  }
}

.map {
  overflow: auto;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 900px) {
    height: 100%;
  }

  &__img {
    display: block;
    width: 95%;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      width: unset;
      max-width: unset;
      height: 100%;
      margin-right: 12px;
      margin-left: 12px;
    }
  }
}
</style>
