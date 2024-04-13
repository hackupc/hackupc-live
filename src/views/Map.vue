<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 0 auto;
  padding: 140px 0 0;
}

.explore {
  display: flex;
  width: 95%;
  gap: 0.5rem;
  justify-content: flex-end;
  max-width: 1300px;
  margin-top: 20px;
  margin-right: 20px;
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
    width: 98%;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      width: unset;
      max-width: unset;
      height: 100%;
    }
  }
}
</style>
