<template>
  <div id="live" class="container-live">
    <div
      class="events-fancy"
      :class="{ 'events-fancy--fullscreen': fullscreen }"
    >
      <ul>
        <template v-for="event in events">
          <li
            v-if="event.type == 'title'"
            :key="`${event.name}-${event.startTmsp}`"
          >
            <h1>{{ event.name }}</h1>
          </li>
          <li
            v-else-if="event.type == 'item'"
            :class="{ happening: event.isHappening }"
            :key="`${event.name}-${event.startTmsp}`"
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
</template>

<script lang="ts">
import { formatDate } from '@/services/dates'
import { ScheduleDay, ScheduleEvent } from '@/services/schedule'
import { defineComponent } from '@vue/composition-api'

interface TimelineHourEvent {
  type: string
  id: ScheduleEvent['id']
  startTmsp: number
  endTmsp: number
  startHour: string
  endHour: string
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

export default defineComponent({
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    days(): ScheduleDay[] {
      return this.$store.state.schedule.days
    },
    nowInSeconds(): number {
      return this.$store.getters.now.unix()
    },
    subscribed(): Record<string, boolean> {
      return this.$store.state.subscribed
    },
    events() {
      const newEvents: (TimelineEventItem | TimelineEventTitle)[] = []

      for (const day of this.days) {
        if (day.end.unix() >= this.nowInSeconds) {
          newEvents.push({
            type: 'title',
            name: formatDate('weekday', day.start),
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
              isSubscribed: this.subscribed[event.id],
            })
            eventIndex += 1
            if (eventIndex < day.events.length) {
              nextEventTmsp = event.start.unix()
            }
          }

          // Add a list element for every step
          if (endTmsp >= this.nowInSeconds) {
            newEvents.push({
              type: 'item',
              startTmsp: i,
              endTmsp,
              hourEvents,
              isHappening:
                this.nowInSeconds >= i && this.nowInSeconds < endTmsp,
            })
          }
        }
      }

      return newEvents
    },
  },
  methods: {
    toggleSubscribe: function (id: ScheduleEvent['id']) {
      this.$store.dispatch('toggleSubscribe', id)
    },
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
      &.happening i {
        font-size: 14px;
        color: $secondaryTextColor;
        position: absolute;
        margin-top: -7.5px;
        left: -35px;
        font-size: 25px;
      }
      a {
        display: block;
        margin-right: 10px;
        color: $secondaryColor;
        &::before {
          font-family: FontAwesome, sans-serif;
          content: '\f041';
        }
      }
      .event {
        margin: 5px 0;
        cursor: pointer;
        .event-hour {
          width: 54px;
          display: flex;
          font-family: 'Montserrat', sans-serif;
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
      margin-left: 0;
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
