<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    centered: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<template>
  <span :class="{ 'icon-label--centered': centered }"
    ><span class="icon-label__icon">
      <slot name="icon"></slot>
    </span>
    <span class="icon-label__label"><slot /></span
  ></span>
</template>

<style lang="scss" scoped>
.icon-label {
  display: inline-block;

  &--centered {
    display: block;
    text-align: center;
  }

  &__icon {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    line-height: 1;
    height: 2rem;
    width: 2rem;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: $secondaryColor;
    color: white;
    font-weight: normal;
    margin-right: 0.25em;

    svg {
      width: 20px;
    }
  }

  &__label {
    display: inline-block;
    height: 2rem;
    padding: 0 12px;
    border-radius: 3px;
    background-color: $secondaryLightColor;
    margin: 4px;
    line-height: 2;
    font-size: 1rem;
    vertical-align: middle;

    a {
      color: currentColor !important;
    }
  }
}
</style>
