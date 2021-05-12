<template>
  <div id="activities">
    <div class="container">
      <panel
        v-for="activity in activities"
        :key="activity.title"
        :title="activity.title"
      >
        <p>
          {{ activity.description }}
        </p>
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'

export default Vue.extend({
  components: {
    Panel,
  },
  data() {
    return {
      activities,
    }
  },
})
</script>

<style lang="scss" scoped></style>
