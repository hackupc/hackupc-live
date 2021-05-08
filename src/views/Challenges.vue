<template>
  <div id="schedule">
    <div class="container">
      <panel title="Example 1">
        <p>Hola</p>
      </panel>
      <panel title="Example 2">
        <p>Hola que tal</p>
      </panel>
      <panel title="Example 3" size="big">
        <p>Aixo es un panel gran</p>
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Panel from '@/components/Panel.vue'

export default Vue.extend({
  components: {
    Panel,
  },
})
</script>

<style lang="scss" scoped></style>
