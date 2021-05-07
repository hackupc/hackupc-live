<template>
  <div class="panel" :class="{ large: size === PanelSize.big }">
    <h1 v-if="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

enum PanelSize {
  small = 'small',
  big = 'big',
}

export default Vue.extend({
  props: {
    title: {
      type: String,
    },
    size: {
      type: String as PropType<PanelSize>,
      default: PanelSize.small,
    },
  },
})
</script>

<style lang="scss" scoped></style>
