<script setup lang="ts">
import { useScheduleStore } from '@/stores/schedule'
import { useTimeStore } from '@/stores/time'
import { computed } from 'vue'
import { formatDate } from '@/services/dates'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { LinkIcon, LocationMarkerIcon } from '@heroicons/vue/solid'
import { RouterLink } from 'vue-router'
import VueMarkdownIt from 'vue3-markdown-it'

const scheduleStore = useScheduleStore()
const timeStore = useTimeStore()

const hasHackathonFinished = computed<boolean>(
  () => scheduleStore.schedule.days.at(-1)?.end.isBefore(timeStore.now) ?? true
)
</script>

<template>
  <div>
    <div
      v-for="day in scheduleStore.schedule.days"
      :key="day.start.unix()"
      class="table-container"
    >
      <h1>
        {{
          formatDate('weekday', day.start) + ' ' + formatDate('date', day.start)
        }}
      </h1>
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Location</th>
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
                <RouterLink
                  v-if="event.physicalLocation"
                  class="link"
                  :to="{
                    name: 'map',
                    params: { mapId: event.physicalLocation.mapId },
                  }"
                >
                  <LocationMarkerIcon class="link__icon" />
                  <span class="link__text">
                    {{ event.physicalLocation.text }}
                  </span>
                </RouterLink>
                <a
                  v-if="event.onlineLocation"
                  :href="event.onlineLocation.url"
                  rel="noopener noreferrer"
                  class="link"
                >
                  <FontAwesomeIcon
                    v-if="event.onlineLocation.icon === 'slack'"
                    class="link__icon"
                    :icon="['fab', 'slack']"
                  />
                  <FontAwesomeIcon
                    v-else-if="event.onlineLocation.icon === 'twitch'"
                    class="link__icon"
                    :icon="['fab', 'twitch']"
                  />
                  <FontAwesomeIcon
                    v-else-if="event.onlineLocation.icon === 'youtube'"
                    class="link__icon"
                    :icon="['fab', 'youtube']"
                  />
                  <LinkIcon v-else class="link__icon" />
                  <span class="link__text">
                    {{ event.onlineLocation.text }}
                  </span>
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
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '@/variables' as *;

.table-container {
  flex: 1 1 0;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 0 0 $border-radius $border-radius;

  h1 {
    padding: 15px;
    margin: 0;
    background-color: $primary-color;
    border-radius: $border-radius $border-radius 0 0;
    color: #fff;
    text-align: center;
  }

  .table-scroll {
    overflow: auto;
  }

  table {
    width: 100%;
    background-color: $contrast-color;
    border-collapse: collapse;
    border-radius: 0 0 $border-radius $border-radius;
    color: $text-color;
  }

  thead {
    background-color: $primary-color;
    color: $primary-color-light;
  }

  th {
    padding: 10px 20px;
    text-align: left;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
      text-align: left;
    }
  }

  td {
    padding: 10px 20px;
    text-align: left;

    &:last-child {
      min-width: 200px;
      border-right: 0;
    }

    &:first-child {
      border-left: 0;
    }
  }

  a {
    color: $links-color;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: $links-color-hover;
    }
  }

  tr:first-child th {
    border-top: 0;
  }

  tr:last-child td {
    border-bottom: 0;
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

.link {
  display: block;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  &__icon {
    height: 20px;
    margin-right: 0.25rem;
    vertical-align: -4px;
  }
}
</style>
