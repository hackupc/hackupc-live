<template>
  <div id="rules" class="container">
    <panel
      v-for="rule in rules"
      :key="rule.title"
      :title="rule.title"
      size="big"
    >
      <vue-markdown :source="rule.description" />
    </panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Panel from '@/components/Panel.vue'
import VueMarkdown from 'vue-markdown'
import { rules } from '@/data/rules'

export default defineComponent({
  components: {
    Panel,
    VueMarkdown,
  },
  data: function () {
    return {
      rules,
    }
  },
})
</script>

<style lang="scss" scoped></style>
