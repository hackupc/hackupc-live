<template>
  <div id="activities">
    <div class="container">
      <panel
        v-for="activity in activities"
        :key="activity.title"
        :title="activity.title"
      >
        <vue-markdown-it :source="activity.description" />
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'
import VueMarkdownIt from 'vue3-markdown-it'

export default defineComponent({
  components: {
    Panel,
    VueMarkdownIt,
  },

  setup() {
    return {
      activities,
    }
  },
})
</script>

<style lang="scss" scoped></style>
