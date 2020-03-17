<template>
  <div id="live" class="under-header">
    <div class="container-live">
      <div class="countdown-time countdown-time__mobile centered show-when-small ">
        <span class="hours">36</span>:<span class="minutes">00</span><span class="seconds">00</span>
      </div>
      <div class="events-fancy">
        <!--To be filled by js-->
        <ul>
          <template v-for="event in events">
            <li v-if="event.type == 'title'" :data-end-timestamp="event.endTmsp" :key="event.name">
              <h1 :data-start-timestamp="event.startTmsp" :data-end-timestamp="event.endTmsp" data-end-action="removeEndedEvent">{{event.name}}</h1>
            </li>
            <li v-if="event.type == 'item'" :data-start-timestamp="event.startTmsp" :data-end-timestamp="event.endTmsp" data-end-action="removeEmptyStep" :key="event.name">
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
    for (const day of this.days) {
      this.events.push({
        type: 'title',
        name: day.name,
        startTmsp: day.startTmsp,
        endTmsp: day.endTmsp,
      });
      const SCHEDULE_STEP = 3600;
      let eventIndex = 0;
      let nextEventTmsp = day.events[eventIndex].startTmsp;
      // Adding events for that day
      for (let i = day.startTmsp; i < day.startTmsp + 24 * 3600; i += SCHEDULE_STEP) {
        // Add a list element for every step

        const hourEvents = [];
        // let liEvent = list.children[list.children.length - 1];
        // I think this loop could be a lot simpler
        // I just don't know how right now
        // Add events that fit in this step
        while (nextEventTmsp < i + SCHEDULE_STEP && eventIndex < day.events.length) {
          const event = day.events[eventIndex];
          hourEvents.push({
            type: 'event',
            id: event.id,
            startTmsp: i,
            endTmsp: i + SCHEDULE_STEP - 1,
            startHour: event.startHour,
            endHour: event.endHour,
            locationId: event.locationId,
            title: event.title,
            subscribed: this.subscribed[event.id] ? 'subscribed' : '',
          });
          /*
          if (isEventSubscribed(day.events[eventIndex].id)) {
            var lastEvent = liEvent.children[liEvent.children.length - 1]
            lastEvent.classList.add('subscribed')
          }
          */
          eventIndex += 1;
          if (eventIndex < day.events.length) {
            nextEventTmsp = event.startTmsp;
          }
        }
        this.events.push({
          type: 'item',
          startTmsp: i,
          endTmsp: i + SCHEDULE_STEP - 1,
          hourEvents: hourEvents,
        });
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
