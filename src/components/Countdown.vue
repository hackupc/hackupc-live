<script setup lang="ts">
import { useScheduleStore } from '@/stores/schedule'
import { useTimeStore } from '@/stores/time'
import dayjs from 'dayjs'
import duration, { type Duration } from 'dayjs/plugin/duration'
import { computed } from 'vue'

dayjs.extend(duration)

interface Props {
  fullscreen?: boolean
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const timeStore = useTimeStore()
const scheduleStore = useScheduleStore()

const remainingTime = computed<Duration>(() => {
  const now = timeStore.now
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
  Math.floor(remainingTime.value.asHours()).toString()
)

const minutes = computed<string>(() => {
  const minutes = remainingTime.value.minutes()
  return minutes < 10 ? `0${minutes}` : `${minutes}`
})

const seconds = computed<string>(() => {
  const seconds = remainingTime.value.seconds()
  return seconds < 10 ? `0${seconds}` : `${seconds}`
})

const handleClick = (): void => {
  emit('click')
}
</script>

<template>
  <div
    class="countdown"
    :class="{
      'countdown--fullscreen': fullscreen,
    }"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keyup.enter="handleClick"
    @keyup.space="handleClick"
  >
    <div class="countdown__time">
      <span>{{ hours }}</span
      >:<span>{{ minutes }}</span>
      <span class="countdown__seconds">{{ seconds }}</span>
    </div>
    <div class="countdown__bg">
      <img src="@/assets/img/hackupc-logo.svg" alt="HackUPC logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.countdown {
  position: absolute;
  display: flex;
  width: 100%;
  height: 215px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 90px 0 55px;
  margin-top: -90px;
  border-radius: 100%;
  box-shadow: 0 -5px 42px rgb(0 0 0 / 40%);
  cursor: url('../assets/img/rocket-fire.png'), auto;
  transition: transform 200ms $ease-bounce;

  &:hover {
    transform: translateY(-5px);
  }

  &__time {
    z-index: 1;
    padding-left: 0.125em;
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 0 4px 16px rgb(0 0 0 / 30%);
    white-space: nowrap;
  }

  &__seconds {
    display: inline-block;
    width: 1.25em;
    margin-left: 0.125em;
    font-size: 0.6em;
    text-align: left;
    vertical-align: top;
  }

  &__bg {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 8px;
    border: 12px solid #e5e5e5;
    background: $primary-color;
    border-radius: 100%;

    img {
      width: 100%;
      opacity: 0.2;
    }
  }

  &--fullscreen {
    position: sticky;
    z-index: 50;
    top: calc(50vh - 16.667vw);
    left: 8vw;
    width: 33.333vw;
    height: 33.333vw;
    border-radius: 50%;
    box-shadow: 0 4px 42px 0 rgb(0 0 0 / 30%);
    cursor: url('../assets/img/rocket-fire.png'), auto;
    text-shadow: 0 0 12px rgb(0 0 0 / 50%);
  }

  &--fullscreen &__time {
    padding-left: 0;
    font-size: 7.5vw;
  }

  &--fullscreen &__bg {
    position: absolute;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    border-width: 8px;
    border-radius: 100%;
  }
}

@media (max-width: 720px) {
  .countdown {
    &--fullscreen {
      top: 40px;
      left: 59vw;
      width: 33.333vw;
      height: 33.333vw;
    }

    &--fullscreen &__time {
      font-size: 6vw;
    }
  }

  .countdown__bg {
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
  }
}
</style>
