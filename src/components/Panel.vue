<template>
  <div class="panel">
    <h1 v-if="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped></style>
