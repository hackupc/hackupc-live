<template>
  <div id="live" class="under-header">
    <div class="container-live">
      <div class="countdown-time countdown-time__mobile centered show-when-small ">
        <span class="hours">36</span>:<span class="minutes">00</span><span class="seconds">00</span>
      </div>
      <div class="events-fancy">
        <ul>
          <template v-for="event in events">
            <li v-if="event.type == 'title'" :data-end-timestamp="event.endTmsp" :key="event.name">
              <h1 :data-start-timestamp="event.startTmsp" :data-end-timestamp="event.endTmsp" data-end-action="removeEndedEvent">{{event.name}}</h1>
            </li>
            <li v-if="event.type == 'item'" :class="event.class" :data-start-timestamp="event.startTmsp" :data-end-timestamp="event.endTmsp" data-end-action="removeEmptyStep" :key="event.name">
              <template v-for="hourEvent in event.hourEvents">
                <div @click="toggleSubscribe" :class="[hourEvent.subscribed, 'event']" :key="hourEvent.id" :data-event-id="hourEvent.id" :data-start-timestamp="hourEvent.startTmsp" :data-end-timestamp="hourEvent.endTmsp" data-end-action="removeEndedEvent" data-update-action="updateFancyEvent">
                  <a href="'#/map/' + hourEvent.locationId"></a>
                  <div class="event-hour">
                    <div>{{hourEvent.startHour}}</div>
                    <div class="end-hour">{{hourEvent.endHour}}</div>
                  </div>
                  <div class="title">
                    {{hourEvent.title}}
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

<script>
export default {
  name: 'Live',
  data: function () {
    return {
      events: [],
    };
  },
  computed: {
    days() {
      return this.$store.state.days;
    },
    currentTime() {
      return this.$store.state.currentTime;
    },
    subscribed() {
      return this.$store.state.subscribed;
    },
  },
  methods: {
    toggleSubscribe: function (event) {
      const id = event.currentTarget.getAttribute('data-event-id');
      this.$store.dispatch('toggleSubscribe', id);
      event.currentTarget.classList.toggle('subscribed');
    },
  },
  mounted: function () {
    window.setInterval(this.updateEvents, 5000);
    for (const day of this.days) {
      console.log(day.endTmsp + ' - ' + this.currentTime);
      if (day.endTmsp >= this.currentTime) {
        this.events.push({
          type: 'title',
          name: day.name,
          startTmsp: day.startTmsp,
          endTmsp: day.endTmsp,
        });
      }
      const SCHEDULE_STEP = 3600;
      let eventIndex = 0;
      let nextEventTmsp = day.events[eventIndex].startTmsp;
      // Adding events for that day
      for (let i = day.startTmsp; i < day.startTmsp + 24 * 3600; i += SCHEDULE_STEP) {
        const endTmsp = i + SCHEDULE_STEP - 1;
        const hourEvents = [];
        // Add events that fit in this step
        while (nextEventTmsp < i + SCHEDULE_STEP && eventIndex < day.events.length) {
          const event = day.events[eventIndex];
          hourEvents.push({
            type: 'event',
            id: event.id,
            startTmsp: i,
            endTmsp: endTmsp,
            startHour: event.startHour,
            endHour: event.endHour,
            locationId: event.locationId,
            title: event.title,
            subscribed: this.subscribed[event.id] ? 'subscribed' : '',
          });
          eventIndex += 1;
          if (eventIndex < day.events.length) {
            nextEventTmsp = event.startTmsp;
          }
        }
        // Add a list element for every step
        if (endTmsp >= this.currentTime) {
          this.events.push({
            type: 'item',
            startTmsp: i,
            endTmsp: endTmsp,
            hourEvents: hourEvents,
            class: (this.currentTime >= i && this.currentTime < endTmsp) ? 'happening' : '',
          });
        }
      }
    }
  },
};
</script>

<style scoped>
</style>
