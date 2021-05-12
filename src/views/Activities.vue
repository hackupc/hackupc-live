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
import Vue from 'vue'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'
import VueMarkdown from 'vue-markdown'

export default Vue.extend({
  components: {
    Panel,
    VueMarkdown,
  },
  data() {
    return {
      activities,
    }
  },
})
</script>

<style lang="scss" scoped></style>
