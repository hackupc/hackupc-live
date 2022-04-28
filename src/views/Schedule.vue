<script setup lang="ts">
import { formatDate } from '@/services/dates'
import { useScheduleStore } from '@/stores/schedule'
import { useTimeStore } from '@/stores/time'
import { LinkIcon } from '@heroicons/vue/solid'
import { computed } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PanelContainer from '@/components/PanelContainer.vue'
import { LocationMarkerIcon } from '@heroicons/vue/solid'
const scheduleStore = useScheduleStore()
const timeStore = useTimeStore()

const hasHackathonFinished = computed<boolean>(
  () => scheduleStore.schedule.days.at(-1)?.end.isBefore(timeStore.now) ?? true
)
</script>

<template>
  <PanelContainer id="schedule" class="schedule">
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
                  <a
                    v-if="event.physicalLocation"
                    class="link"
                    :href="`/map/${event.physicalLocation.mapId}`"
                  >
                    <LocationMarkerIcon class="link__icon" />
                    <span class="link__text">
                      {{ event.physicalLocation.text }}
                    </span>
                  </a>

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
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/variables' as *;

.schedule {
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
  color: $secondary-color;

  h1 {
    padding: 10px;
    margin: 0;
    background-color: $primary-color;
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
    background-color: $contrast-color;
    border-collapse: collapse;
    border-radius: 0 0 3px 3px;
    color: $text-color;
  }

  thead {
    background-color: $primary-color;
    color: $contrast-color;
  }

  td,
  th {
    padding: 10px;
    text-align: left;
  }

  td {
    border: thin solid #ececec;

    &:last-child {
      min-width: 200px;
    }

    &:first-child {
      text-align: center;
    }
  }

  a {
    color: $secondary-color;
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
