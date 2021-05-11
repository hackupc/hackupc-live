<template>
  <div id="challenges">
    <div class="container">
      <panel
        v-for="challenge in challenges"
        :key="challenge.title"
        :title="challenge.company"
      >
        <h3>{{ challenge.title }}</h3>
        <p>
          {{ challenge.description }}
        </p>
        <p><strong>Prize:</strong> {{ challenge.prize }}</p>
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Panel from '@/components/Panel.vue'
import { challenges } from '@/data/challenges'

export default Vue.extend({
  components: {
    Panel,
  },
  data() {
    return {
      challenges,
    }
  },
})
</script>

<style lang="scss" scoped></style>
