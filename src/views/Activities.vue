<template>
  <div id="activities">
    <div class="container">
      <panel
        v-for="activity in activities"
        :key="activity.title"
        :title="activity.title"
      >
        <vue-markdown :source="activity.description" />
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'
import VueMarkdown from 'vue-markdown'

export default defineComponent({
  components: {
    Panel,
    VueMarkdown,
  },

  setup() {
    return {
      activities,
    }
  },
})
</script>

<style lang="scss" scoped></style>
