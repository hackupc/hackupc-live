<script setup lang="ts">
import { formatDate } from '@/services/dates'
import type { ScheduleDay, ScheduleEvent } from '@/services/schedule'
import { useNotificationsStore } from '@/stores/notifications'
import { useScheduleStore } from '@/stores/schedule'
import { useTimeStore } from '@/stores/time'
import { ArrowNarrowRightIcon, VolumeOffIcon } from '@heroicons/vue/solid'
import { computed } from 'vue'

interface TimelineHourEvent {
  type: 'event'
  startTmsp: number
  endTmsp: number
  title: string

  id: ScheduleEvent['id']
  startHour: string
  endHour: string
  isSubscribed: boolean
}

interface TimelineEventTitle {
  type: 'title'
  startTmsp: number
  endTmsp: number
  title: string
}

interface TimelineEventItem {
  type: 'item'
  startTmsp: number
  endTmsp: number

  isHappening: boolean
  hourEvents: TimelineHourEvent[]
}

interface Props {
  fullscreen?: boolean
}
defineProps<Props>()

const timeStore = useTimeStore()
const scheduleStore = useScheduleStore()
const notificationsStore = useNotificationsStore()

const days = computed<ScheduleDay[]>(() => scheduleStore.schedule.days)
const nowInSeconds = computed<number>(() => timeStore.now.unix())
const hasHackathonFinished = computed<boolean>(
  () => scheduleStore.schedule.days.at(-1)?.end.isBefore(timeStore.now) ?? true
)

const events = computed<(TimelineEventItem | TimelineEventTitle)[]>(() => {
  const newEvents: (TimelineEventItem | TimelineEventTitle)[] = []

  for (const day of days.value) {
    if (hasHackathonFinished.value || day.end.unix() >= nowInSeconds.value) {
      newEvents.push({
        type: 'title',
        title: formatDate('weekday', day.start),
        startTmsp: day.start.unix(),
        endTmsp: day.end.unix(),
      })
    }

    const SCHEDULE_STEP = 3600
    let eventIndex = 0
    let nextEventTmsp = day.events[eventIndex].start.unix()

    // Adding events for that day
    for (
      let i = day.start.unix();
      i < day.start.unix() + 24 * 3600;
      i += SCHEDULE_STEP
    ) {
      const endTmsp = i + SCHEDULE_STEP - 1
      const hourEvents: TimelineHourEvent[] = []

      // Add events that fit in this step
      while (
        nextEventTmsp < i + SCHEDULE_STEP &&
        eventIndex < day.events.length
      ) {
        const event = day.events[eventIndex]
        hourEvents.push({
          type: 'event',
          id: event.id,
          startTmsp: i,
          endTmsp,
          startHour: formatDate('time', event.start),
          endHour: formatDate('time', event.end),
          title: event.title,
          isSubscribed: notificationsStore.subscriptions.includes(event.id),
        })
        eventIndex += 1
        if (eventIndex < day.events.length) {
          nextEventTmsp = event.start.unix()
        }
      }

      // Add a list element for every step
      if (hasHackathonFinished.value || endTmsp >= nowInSeconds.value) {
        newEvents.push({
          type: 'item',
          startTmsp: i,
          endTmsp,
          hourEvents,
          isHappening: nowInSeconds.value >= i && nowInSeconds.value < endTmsp,
        })
      }
    }
  }

  return newEvents
})
</script>

<template>
  <div id="live" class="container-live">
    <div
      class="events-fancy"
      :class="{ 'events-fancy--fullscreen': fullscreen }"
    >
      <ul>
        <template v-for="event in events">
          <li
            v-if="event.type === 'title'"
            :key="`${event.title}-${event.startTmsp}`"
          >
            <h1>{{ event.title }}</h1>
          </li>
          <li
            v-else-if="event.type === 'item'"
            :key="`${event.startTmsp}`"
            :class="{ happening: event.isHappening }"
          >
            <ArrowNarrowRightIcon
              v-if="event.isHappening"
              class="event__arrow"
            />
            <div
              v-for="hourEvent in event.hourEvents"
              :key="hourEvent.id"
              class="event"
              :class="{ subscribed: hourEvent.isSubscribed }"
              :data-event-id="hourEvent.id"
              @click="notificationsStore.toggleSubscription(hourEvent.id)"
            >
              <div class="event__hour">
                <div>{{ hourEvent.startHour }}</div>
                <div class="event__end-hour">{{ hourEvent.endHour }}</div>
              </div>
              <div class="title">
                {{ hourEvent.title }}
                <VolumeOffIcon
                  v-if="!hourEvent.isSubscribed"
                  class="event__subscribed-icon"
                />
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.container-live {
  display: flex;
  overflow: auto;
  justify-content: center;
}

.event {
  margin: 5px 0;
  cursor: pointer;
  user-select: none;

  &__arrow {
    position: absolute;
    right: 100%;
    height: 2.5rem;
    margin-top: -0.25em;
    margin-right: 0.5em;
  }

  &__subscribed-icon {
    width: 20px;
    color: $secondary-color;
  }

  &__hour {
    display: flex;
    width: 54px;
    flex-direction: column;
    margin-top: 3px;
    margin-right: 10px;
    font-size: 15px;
    font-weight: bold;
    text-align: right;

    &__end-hour {
      font-size: 12px;
    }
  }

  &.subscribed {
    .title i {
      font-size: 13px;
      line-height: 0;
      vertical-align: super;
    }
  }

  .title {
    position: relative;
    line-height: 25px;
  }
}

.events-fancy {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: #fff;
  -webkit-overflow-scrolling: touch;
  text-align: left;

  &::before {
    position: fixed;
    z-index: 10;
    top: 39px;
    right: 0;
    left: 0;
    height: 100px;
    background-image: linear-gradient($bg-color, transparent);
    content: '';
    pointer-events: none;
  }

  ul {
    min-height: 200px;
    max-height: 100%;
    box-sizing: content-box;
    padding-top: 200px;
    padding-left: 100px;
    margin: 0;
    list-style: none;
    overflow-y: scroll;
  }

  li {
    position: relative;
    display: flex;
    min-height: 10px;
    flex-flow: column wrap;
    align-content: flex-start;
    padding: 0 0 0 15px;
    border-left: 3px solid $secondary-text-color;
    margin: 15px 0;
    color: $secondary-text-color;
    font-size: 28px;

    :last-child {
      margin-bottom: 400px;
    }

    > div {
      display: flex;
    }
  }

  h1 {
    margin: 0;
    font-weight: normal;
  }

  &--fullscreen {
    width: 100%;
    margin-right: 0;
    margin-left: 0;

    &::before {
      content: none;
    }

    ul {
      width: 100%;
      height: 100%;
      max-height: 100%;
      margin-left: 40%;
    }

    li {
      margin-right: 60%;
      font-size: 1.5em;
    }
  }
}

@media (max-width: 720px) {
  .events-fancy {
    ul {
      padding-left: 25px !important;
    }
  }
}

.happening {
  font-weight: bold !important;
}
</style>
