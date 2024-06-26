<script setup lang="ts">
import PanelContainer from '@/components/PanelContainer.vue'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ScheduleView from '@/components/ScheduleView.vue'
import LiveView from '@/components/LiveView.vue'

const route = useRoute()

const currentSchedule = computed<'live' | 'detailed'>(() => {
  if (
    route.params?.scheduleId !== 'live' &&
    route.params?.scheduleId !== 'detailed'
  ) {
    return 'detailed'
  }

  return route.params.scheduleId
})
</script>

<template>
  <PanelContainer id="schedule" class="schedule">
    <div class="explore">
      <div class="explore__list">
        <RouterLink
          :to="{
            name: 'schedule',
            params: { scheduleId: 'detailed' },
          }"
          class="button"
          :class="{ 'button--disabled': currentSchedule === 'detailed' }"
          >Detailed view</RouterLink
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
        ** The schedule is under construction. Times can change and also
        activities will appear as soon as they are confirmed.
      </p>
    </div>
    <div class="scrollable">
      <div v-if="currentSchedule === 'detailed'">
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
  position: relative;
  display: flex;
  flex-direction: column;

  div {
    max-width: 100%;
  }
}

.scrollable {
  flex-grow: 1;
  overflow-y: auto;
}

.explore {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
  margin-right: 20px;
}

.note {
  margin: 0;
  color: $primary-color-light;
  font-size: 15px;
  text-align: center;
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
</style>
