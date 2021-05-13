<template>
  <div id="challenges">
    <div class="container">
      <panel
        v-for="challenge in challenges"
        :key="challenge.title"
        :title="challenge.company"
      >
        <h3>{{ challenge.title }}</h3>
        <vue-markdown-it :source="challenge.description" />
        <!-- <p><strong>Prize:</strong> {{ challenge.prize }}</p> -->
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '@/components/Panel.vue'
import { challenges } from '@/data/challenges'
import VueMarkdownIt from 'vue3-markdown-it'

export default defineComponent({
  components: {
    Panel,
    VueMarkdownIt,
  },

  setup() {
    return {
      challenges,
    }
  },
})
</script>

<style lang="scss" scoped></style>
