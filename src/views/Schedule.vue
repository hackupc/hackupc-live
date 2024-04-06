<script setup lang="ts">
import PanelContainer from '@/components/PanelContainer.vue'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ScheduleView from '@/components/ScheduleView.vue'
import LiveView from '@/components/LiveView.vue'

const route = useRoute()

const currentSchedule = computed<'live' | 'basic'>(() => {
  if (
    route.params?.scheduleId !== 'live' &&
    route.params?.scheduleId !== 'basic'
  ) {
    return 'basic'
  }

  return route.params.scheduleId
})
</script>

<template>
  <PanelContainer id="schedule" class="schedule">
    <div class="explore">
      <p class="explore__title">Select your favourite view</p>
      <div class="explore__list">
        <RouterLink
          :to="{
            name: 'schedule',
            params: { scheduleId: 'basic' },
          }"
          class="button"
          :class="{ 'button--disabled': currentSchedule === 'basic' }"
          >Basic view</RouterLink
        >
        <RouterLink
          :to="{
            name: 'schedule',
            params: { scheduleId: 'live' },
          }"
          class="button"
          :class="{ 'button--disabled': currentSchedule === 'live' }"
          >Live view</RouterLink
        >
      </div>
      <p class="note">
        ** The schedule is in construction times can change and also activities
        will appear as they are confirmed.
      </p>
    </div>
    <div class="scrollable">
      <div v-if="currentSchedule === 'basic'">
        <ScheduleView />
      </div>

      <div v-if="currentSchedule === 'live'">
        <LiveView />
      </div>
    </div>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/variables' as *;

.schedule {
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    max-width: 100%;
  }
}

.scrollable {
  flex-grow: 1;
  overflow-y: auto;
}

.explore {
  text-align: center;
  margin-top: 20px;

  &__title {
    margin: 0 0 20px;
    text-align: center;
    color: $primary-color-light;
    font-weight: bold;
    font-size: 20px;
  }
}

.note {
  margin: 15px 0 15px;
  color: $primary-color-light;
  font-size: 18px;
  text-align: center;
}

.button {
  display: inline-block;
  padding: 8px 24px;
  margin: 0 0.2em 16px;
  background: $primary-color;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  color: $text-color;
  cursor: url('../assets/img/rocket-fire.png'), auto;
  font-weight: bold;

  &--disabled {
    filter: grayscale(0.5);
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
