<script lang="ts">
import { defineComponent } from 'vue'
import Panel from '@/components/Panel.vue'
import VueMarkdownIt from 'vue3-markdown-it'
import { rules } from '@/data/rules'

export default defineComponent({
  components: {
    Panel,
    VueMarkdownIt,
  },

  setup() {
    return {
      rules,
    }
  },
})
</script>

<template>
  <div id="rules" class="container">
    <panel
      v-for="rule in rules"
      :key="rule.title"
      :title="rule.title"
      size="big"
    >
      <vue-markdown-it :source="rule.description" />
    </panel>
  </div>
</template>

<style lang="scss" scoped></style>
