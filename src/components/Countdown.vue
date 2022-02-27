<script setup lang="ts">
import { computed } from 'vue'
import { formatDuration } from '@/services/dates'
import duration, { type Duration } from 'dayjs/plugin/duration'
import dayjs from 'dayjs'
import { useTimeStore } from '@/stores/time'
import { useScheduleStore } from '@/stores/schedule'

dayjs.extend(duration)

interface Props {
  fullscreen?: boolean
}
const { fullscreen = false } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const timeStore = useTimeStore()
const scheduleStore = useScheduleStore()

const remainingTime = computed<Duration>(() => {
  const now = timeStore.realNow
  const { start, end } = scheduleStore.schedule.countdown

  if (now.isBefore(start)) {
    return dayjs.duration(end.diff(start))
  } else if (now.isAfter(end)) {
    return dayjs.duration(0)
  } else {
    return dayjs.duration(end.diff(now))
  }
})
const hours = computed<string>(() =>
  formatDuration('hour', remainingTime.value)
)
const minutes = computed<string>(() =>
  formatDuration('minute', remainingTime.value)
)
const seconds = computed<string>(() =>
  formatDuration('second', remainingTime.value)
)

const handleClick = (): void => {
  emit('click')
}
</script>

<template>
  <div
    class="countdown"
    :class="{
      'hide-when-small': fullscreen,
      'countdown--fullscreen': fullscreen,
    }"
    @click="handleClick"
  >
    <div class="countdown__time">
      <span>{{ hours }}</span>:
      <span>{{ minutes }}</span>
      <span class="countdown__seconds">{{ seconds }}</span>
    </div>
    <div class="countdown__bg">
      <img src="@/assets/img/hackupc-logo.svg" alt="HackUPC logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.countdown {

.countdown {
  position: absolute;
  width: 100%;
  height: 215px;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 200ms $easeBounce;
  border-radius: 100%;
  box-shadow: 0 -5px 42px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -90px;
  padding: 90px 0 55px;

  &:hover {
    transform: translateY(-5px);
  }

  &__time {
    z-index: 1;
    font-size: 3rem;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    font-weight: bold;
    padding-left: 0.125em;
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }

  &__seconds {
    vertical-align: top;
    font-size: 0.6em;
    width: 1.25em;
    display: inline-block;
    text-align: left;
    margin-left: 0.125em;
  }

  &__bg {
    border-radius: 100%;
    border: 12px solid #e5e5e5;
    background: $primaryColor;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 8px;
    z-index: 0;

    img {
      width: 100%;
      opacity: 0.2;
    }
  }

  &--fullscreen {
    position: absolute;
    width: 33.333vw;
    height: 33.333vw;
    top: calc(50vh - 16.667vw);
    left: 8vw;
    z-index: 50;
    border-radius: 50%;
    box-shadow: 0 4px 42px 0 rgba(0, 0, 0, 0.3);
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  &--fullscreen &__time {
    font-size: 7.5vw;
    padding-left: 0;
  }

  &--fullscreen &__bg {
    position: absolute;
    width: 100%;
    left: 0;
    border-radius: 100%;
    border-width: 8px;
    box-sizing: border-box;
  }
}
