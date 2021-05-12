<template>
  <div id="challenges">
    <div class="container">
      <panel
        v-for="challenge in challenges"
        :key="challenge.title"
        :title="challenge.company"
      >
        <h3>{{ challenge.title }}</h3>
        <vue-markdown :source="challenge.description" />
        <p><strong>Prize:</strong> {{ challenge.prize }}</p>
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Panel from '@/components/Panel.vue'
import { challenges } from '@/data/challenges'
import VueMarkdown from 'vue-markdown'

export default Vue.extend({
  components: {
    Panel,
    VueMarkdown,
  },
  data() {
    return {
      challenges,
    }
  },
})
</script>

<style lang="scss" scoped></style>
