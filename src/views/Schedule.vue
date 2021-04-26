<template>
  <div id="schedule" class="under-header padding-bottom">
    <div class="container">
      <div>
        <div v-for="day in days" :key="day.name" class="table-container">
          <h1>{{day.name}}</h1>
          <div class="table-scroll">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Title</th>
                  <th class="hide-when-small">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in day.events" :key="event.id" :class="hasHappened(event.startTmsp)">
                  <td><a href="https://www.twitch.tv/hackersupc">{{event.emoji}}</a></td>
                  <td>{{event.startHour}}</td>
                  <td>{{event.endHour}}</td>
                  <td class="when-small">{{event.title}}</td>
                  <td class="hide-when-small">{{event.description}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  computed: {
    days() {
      return this.$store.state.schedule.days;
    },
    currentTime() {
      return this.$store.getters.currentTime;
    },
  },
  methods: {
    hasHappened(startTmsp) {
      return startTmsp < this.currentTime ? 'happened' : '';
    },
  },
};
</script>

<style scoped>
</style>
