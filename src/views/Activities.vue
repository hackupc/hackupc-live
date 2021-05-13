<template>
  <div id="activities">
    <div class="container">
      <panel
        v-for="activity in activities"
        :key="activity.title"
        :title="activity.title"
        class="activity"
      >
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

<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'
import { formatInterval, parseSpanishDate } from '@/services/dates'
import VueMarkdownIt from 'vue3-markdown-it'

export default defineComponent({
  components: {
    Panel,
    VueMarkdownIt,
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

<style lang="scss" scoped>
.activity {
  &__time {
    margin-bottom: 1.5em;
    font-style: italic;
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
