<script setup lang="ts">
import IconLabel from '@/components/IconLabel.vue'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'
import { formatInterval, parseSpanishDate } from '@/services/dates'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
</script>

<template>
  <div id="activities">
    <PanelContainer>
      <Panel
        v-for="activity in activities"
        :key="activity.title"
        :title="activity.title"
        class="activity"
      >
        <IconLabel class="channel" centered>
          <template #icon>
            <FontAwesomeIcon :icon="['fab', activity.icon]" />
          </template>
          {{ activity.location }}
        </IconLabel>
        <p class="activity__time">
          {{
            formatInterval(
              parseSpanishDate('date-time', activity.start),
              parseSpanishDate('date-time', activity.end)
            )
          }}
        </p>
        <VueMarkdownIt :source="activity.description" />
        <img :src="activity.image" aria-hidden="true" class="activity__image" />
      </Panel>
    </PanelContainer>
  </div>
</template>

<style lang="scss" scoped>
.channel {
  margin-bottom: 1em;
}

.activity {
  &__time {
    margin-bottom: 1.5em;
    color: #ec6162;
    font-style: italic;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__image {
    display: block;
    max-width: 100%;
    max-height: 10em;
    margin: 1em auto 0;
    border-radius: 0.5rem;
  }
}
</style>
