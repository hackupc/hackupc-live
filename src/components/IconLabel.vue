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
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-right: 0.25em;
    background-color: $secondary-color;
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
    background-color: $secondary-light-color;
    border-radius: 3px;
    font-size: 1rem;
    line-height: 2;
    vertical-align: middle;

    a {
      color: currentcolor !important;
    }
  }
}
</style>
