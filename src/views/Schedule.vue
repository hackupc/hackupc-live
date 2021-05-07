<template>
  <div id="schedule" class="under-header padding-bottom">
    <div class="container">
      <div>
        <div v-for="day in days" :key="day.name" class="table-container">
          <h1>{{ day.name }}</h1>
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
                <tr
                  v-for="event in day.events"
                  :key="event.id"
                  :class="{ happened: hasHappened(event.startTmsp) }"
                >
                  <td>
                    <a href="https://www.twitch.tv/hackersupc">{{
                      event.emoji
                    }}</a>
                  </td>
                  <td>{{ event.startHour }}</td>
                  <td>{{ event.endHour }}</td>
                  <td class="when-small">{{ event.title }}</td>
                  <td class="hide-when-small">{{ event.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    days() {
      return this.$store.state.schedule.days
    },
    nowInSeconds() {
      return this.$store.getters.nowInSeconds
    },
  },
  methods: {
    hasHappened(startTmsp: number): boolean {
      return startTmsp < this.nowInSeconds
    },
  },
})
</script>

<style lang="scss" scoped>
#schedule > div {
  display: flex;
  flex-wrap: wrap;

  div {
    max-width: 100%;
  }
}

.table-container {
  color: $secondaryColor;
  flex: 1 1 0;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  h1 {
    border-radius: $borderRadius $borderRadius 0 0;
    text-align: center;
    margin: 0;
    padding: 10px;
    background-color: $primaryColor;
    color: #fff;
    // border-bottom: 1px solid #fff3;
  }
  .table-scroll {
    overflow: auto;
  }
  table {
    width: 100%;
    color: $textColor;
    border-collapse: collapse;
    background-color: $contrastColor;
    border-radius: 0 0 $borderRadius $borderRadius;

    thead {
      color: $contrastColor;
      background-color: $primaryColor;
    }

    td,
    th {
      padding: 10px;
      text-align: left;
    }
    td {
      border: thin solid fade($secondaryColor, 20%);
      &:last-child {
        min-width: 200px;
      }
      &:first-child {
        text-align: center;
        .location-icon {
          display: inline-block;
        }
      }
      a {
        color: $secondaryColor;
      }
    }
  }
}
</style>
