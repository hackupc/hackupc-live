<script setup lang="ts">
import { formatDate } from '@/services/dates'
import { useScheduleStore } from '@/stores/schedule'
import { useTimeStore } from '@/stores/time'
import { LinkIcon } from '@heroicons/vue/solid'
import { computed } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'

const scheduleStore = useScheduleStore()
const timeStore = useTimeStore()

const hasHackathonFinished = computed<boolean>(
  () => scheduleStore.schedule.days.at(-1)?.end.isBefore(timeStore.now) ?? true
)
</script>

<template>
  <PanelContainer id="schedule">
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
                :class="{
                  happened:
                    !hasHackathonFinished && event.end.isBefore(timeStore.now),
                }"
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
  </PanelContainer>
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
  flex: 1 1 0;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  color: $secondaryColor;

  h1 {
    padding: 10px;
    margin: 0;
    background-color: $primaryColor;
    border-radius: 3px 3px 0 0;
    color: #fff;
    text-align: center;

    // border-bottom: 1px solid #fff3;
  }

  .table-scroll {
    overflow: auto;
  }

  table {
    width: 100%;
    background-color: $contrastColor;
    border-collapse: collapse;
    border-radius: 0 0 3px 3px;
    color: $textColor;

    thead {
      background-color: $primaryColor;
      color: $contrastColor;
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
  color: currentcolor !important;

  svg {
    width: 20px;
  }
}

.happened {
  opacity: 0.5;
}

.when-small {
  width: 20%;
}

@media (max-width: 720px) {
  .when-small {
    width: 60%;
  }

  .hide-when-small {
    display: none !important;
  }
}
</style>
