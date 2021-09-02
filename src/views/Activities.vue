<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'
import { formatInterval, parseSpanishDate } from '@/services/dates'
import VueMarkdownIt from 'vue3-markdown-it'
import IconLabel from '@/components/IconLabel.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  components: {
    Panel,
    VueMarkdownIt,
    IconLabel,
    FontAwesomeIcon,
  },
  setup() {
    return {
      activities,
      formatInterval,
      parseSpanishDate,
    }
  },
})
</script>

<template>
  <div id="activities">
    <div class="container">
      <panel
        v-for="activity in activities"
        :key="activity.title"
        :title="activity.title"
        class="activity"
      >
        <icon-label class="channel" :centered="true">
          <template v-slot:icon>
            <font-awesome-icon :icon="['fab', activity.icon]" />
          </template>
          {{ activity.location }}
        </icon-label>
        <p class="activity__time">
          {{
            formatInterval(
              parseSpanishDate('date-time', activity.start),
              parseSpanishDate('date-time', activity.end)
            )
          }}
        </p>
        <vue-markdown-it :source="activity.description" />
        <img
          :src="activity.image"
          v-bind:alt="activity.image"
          class="activity__image"
        />
      </panel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.channel {
  margin-bottom: 1em;
}
.activity {
  &__time {
    margin-bottom: 1.5em;
    font-style: italic;
    color: #ec6162;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  &__image {
    display: block;
    margin: 1em auto 0;
    max-width: 100%;
    max-height: 10em;
    border-radius: 0.5rem;
  }
}
</style>
