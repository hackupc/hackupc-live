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
const nowInSeconds = computed<number>(() => timeStore.realNow.unix())

const events = computed<(TimelineEventItem | TimelineEventTitle)[]>(() => {
  const newEvents: (TimelineEventItem | TimelineEventTitle)[] = []

  for (const day of days.value) {
    if (day.end.unix() >= nowInSeconds.value) {
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
      if (endTmsp >= nowInSeconds.value) {
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
              <div class="event-hour">
                <div>{{ hourEvent.startHour }}</div>
                <div class="end-hour">{{ hourEvent.endHour }}</div>
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
.container-live {
  display: flex;
  top: 0;
  bottom: 0;
  width: 100%;
  position: fixed;
  justify-content: center;
  overflow: auto;
}
.event {
  &__arrow {
    position: absolute;
    margin-top: -0.25em;
    right: 100%;
    margin-right: 0.5em;
    height: 2.5rem;
  }
  &__subscribed-icon {
    width: 20px;
    color: $secondaryColor;
  }
}
.events-fancy {
  text-align: left;
  color: white;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;

  &::before {
    content: '';
    position: fixed;
    top: 39px;
    left: 0;
    right: 0;
    height: 100px;
    background-image: linear-gradient($bgColor, transparent);
    z-index: 10;
    pointer-events: none;
  }

  ul {
    list-style: none;
    margin: 0;
    min-height: 200px;
    max-height: 100%;
    overflow-y: scroll;
    padding-top: 200px;
    padding-left: 100px;
    box-sizing: content-box;
    li {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      position: relative;
      margin: 15px 0 15px 0;
      min-height: 10px;
      padding: 0 0 0 15px;
      font-size: 28px;
      border-left: 3px solid $secondaryTextColor;
      color: $secondaryTextColor;
      align-content: flex-start;
      &:last-child {
        margin-bottom: 400px;
      }
      /* stylelint-disable */
      h1 {
        margin: 0;
        font-weight: normal;
      }
      & > div {
        display: flex;
      }
      /* stylelint-enable */
      &.happened {
        opacity: 1;
        border-left: 2px solid fade($secondaryTextColor, 25%);
      }

      .event {
        margin: 5px 0;
        cursor: pointer;
        .event-hour {
          width: 54px;
          display: flex;
          flex-direction: column;
          text-align: right;
          font-weight: bold;
          font-size: 15px;
          margin-top: 3px;
          margin-right: 10px;
          .end-hour {
            font-size: 12px;
          }
        }
        &.subscribed {
          .title i {
            font-size: 13px;
            vertical-align: super;
            line-height: 0;
          }
        }
        .title {
          position: relative;
          line-height: 25px;
        }
      }
    }
  }

  &--fullscreen {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    position: fixed;
    &::before {
      content: none;
    }
    ul {
      max-height: 100%;
      width: 100%;
      height: 100%;
      margin-left: 40%;
      li {
        font-size: 1.5em;
        margin-right: 60%;
      }
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
</style>
