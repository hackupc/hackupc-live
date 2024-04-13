<script setup lang="ts">
defineProps<{
  centered?: boolean
}>()
</script>

<template>
  <span :class="{ 'icon-label--centered': centered }">
    <span class="icon-label__icon">
      <slot name="icon"></slot>
    </span>
    <span class="icon-label__label">
      <slot />
    </span>
  </span>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.icon-label {
  display: inline-block;

  &--centered {
    display: block;
    text-align: center;
  }

  &__icon {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    padding: 6px;
    margin: 0;
    margin-right: 0.25em;
    background-color: $primary-color;
    border-radius: 5px;
    color: #fff;
    font-weight: normal;
    line-height: 1;
    text-align: center;
    vertical-align: middle;

    svg {
      width: 20px;
    }
  }

  &__label {
    display: inline-block;
    height: 2rem;
    padding: 0 12px;
    margin: 4px;
    background-color: $primary-color-light;
    border-radius: 3px;
    font-size: 1rem;
    line-height: 2;
    vertical-align: middle;
    color: $primary-color !important;
    font-weight: bold;
  }
}
</style>
