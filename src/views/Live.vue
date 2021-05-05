<template>
  <div id="live" class="under-header">
    <div class="container-live">
      <div class="events-fancy">
        <ul>
          <template v-for="event in events">
            <li v-if="event.type == 'title'" :key="event.name">
              <h1>{{ event.name }}</h1>
            </li>
            <li
              v-if="event.type == 'item'"
              :class="{ happening: event.isHappening }"
              :key="event.name"
            >
              <i v-if="event.isHappening" class="fab fa-arrow-right"></i>
              <template v-for="hourEvent in event.hourEvents">
                <div
                  @click="toggleSubscribe(hourEvent.id)"
                  class="event"
                  :class="{ subscribed: subscribed[hourEvent.id] }"
                  :key="hourEvent.id"
                  :data-event-id="hourEvent.id"
                >
                  <div class="event-hour">
                    <div>{{ hourEvent.startHour }}</div>
                    <div class="end-hour">{{ hourEvent.endHour }}</div>
                  </div>
                  <div class="title">
                    {{ hourEvent.title }}
                    <i v-if="subscribed[hourEvent.id]" class="fab fa-bell"></i>
                  </div>
                </div>
              </template>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ScheduleEvent } from '@/services/schedule'
import Vue from 'vue'

interface TimelineHourEvent {
  type: string
  id: ScheduleEvent['id']
  startTmsp: number
  endTmsp: number
  startHour: number
  endHour: number
  locationId: string
  title: string
  isSubscribed: boolean
}

interface TimelineEventItem {
  type: 'title'
  name: string
  startTmsp: number
  endTmsp: number
}

interface TimelineEventTitle {
  type: 'item'
  startTmsp: number
  endTmsp: number
  isHappening: boolean
  hourEvents: TimelineHourEvent[]
}

export default Vue.extend({
  data: function () {
    return {
      events: [] as (TimelineEventItem | TimelineEventTitle)[],
      interval: undefined as number | undefined,
    }
  },
  computed: {
    days() {
      return this.$store.state.schedule.days
    },
    currentTime() {
      return this.$store.getters.currentTime
    },
    subscribed() {
      return this.$store.state.subscribed
    },
  },
  methods: {
    toggleSubscribe: function (id: ScheduleEvent['id']) {
      this.$store.dispatch('toggleSubscribe', id)
    },
    updateEvents: function () {
      this.events = []

      for (const day of this.days) {
        if (day.endTmsp >= this.currentTime) {
          this.events.push({
            type: 'title',
            name: day.name,
            startTmsp: day.startTmsp,
            endTmsp: day.endTmsp,
          })
        }

        const SCHEDULE_STEP = 3600
        let eventIndex = 0
        let nextEventTmsp = day.events[eventIndex].startTmsp

        // Adding events for that day
        for (
          let i = day.startTmsp;
          i < day.startTmsp + 24 * 3600;
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
              endTmsp: endTmsp,
              startHour: event.startHour,
              endHour: event.endHour,
              locationId: event.locationId,
              title: event.title,
              isSubscribed: this.subscribed[event.id],
            })
            eventIndex += 1
            if (eventIndex < day.events.length) {
              nextEventTmsp = event.startTmsp
            }
          }

          // Add a list element for every step
          if (endTmsp >= this.currentTime) {
            this.events.push({
              type: 'item',
              startTmsp: i,
              endTmsp: endTmsp,
              hourEvents,
              isHappening: this.currentTime >= i && this.currentTime < endTmsp,
            })
          }
        }
      }
    },
  },
  mounted: function () {
    setTimeout(this.updateEvents, 200)
    this.interval = window.setInterval(this.updateEvents, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
})
</script>

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
</style>
