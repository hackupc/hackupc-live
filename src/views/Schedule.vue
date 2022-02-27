<script setup lang="ts">
import { formatDate } from '@/services/dates'
import VueMarkdownIt from 'vue3-markdown-it'
import { LinkIcon } from '@heroicons/vue/solid'
import { useScheduleStore } from '@/stores/schedule'
import { useTimeStore } from '@/stores/time'

const scheduleStore = useScheduleStore()
const timeStore = useTimeStore()
</script>

<template>
  <div id="schedule" class="container">
    <div>
      <div
        v-for="day in scheduleStore.schedule.days"
        :key="day.start.unix()"
        class="table-container"
      >
        <h1>{{ formatDate('weekday', day.start) }}</h1>
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
                :class="{ happened: event.end.isBefore(timeStore.realNow) }"
              >
                <td>
                  <a
                    v-if="event.showLink"
                    href="https://www.twitch.tv/hackersupc"
                    rel="noopener noreferrer"
                    class="link-icon"
                  >
                    <LinkIcon />
                  </a>
                </td>
                <td>{{ formatDate('time', event.start) }}</td>
                <td>
                  <template v-if="event.start !== event.end">{{
                    formatDate('time', event.end)
                  }}</template>
                </td>
                <td class="when-small">{{ event.title }}</td>
                <td class="hide-when-small">
                  <VueMarkdownIt :source="event.description" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#schedule {
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
    border-radius: 3px 3px 0 0;
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
    border-radius: 0 0 3px 3px;

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
.link-icon {
  color: currentColor !important;

  svg {
    width: 20px;
  }
}
</style>
