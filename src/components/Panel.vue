<script setup lang="ts">
interface Props {
  title?: string
  size?: 'big' | 'small'
}
defineProps<Props>()
</script>

<template>
  <div class="panel" :class="{ 'panel--big': size === 'big' }">
    <h2 v-if="title" class="panel__title">{{ title }}</h2>
    <div class="panel__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  border-radius: 3px;
  flex: 1 1 350px;
  margin: 16px;
  background-color: $contrastColor;
  color: $textColor;
  overflow: hidden;
  text-align: left;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &--big {
    flex: 1 1 782px;
  }

  &__title {
    margin: 0 0 0 0;
    font-size: 20px;
    color: white;
    background-color: $primaryColor;
    text-align: center;
    padding: 4px 24px;
    line-height: 1.6;
  }

  &__content {
    padding: 24px;
    line-height: 1.6;

    & > *:first-child,
    & ::v-deep(* > div:first-child > *:first-child) {
      margin-top: 0;
    }
    & > *:last-child,
    & ::v-deep(* > div:last-child > *:last-child) {
      margin-bottom: 0;
    }

    ::v-deep(a) {
      color: $highlightColor;
      text-decoration: underline;
    }

    ::v-deep(h3) {
      margin: 12px 0 4px;
    }

    ::v-deep(p, ul, ol) {
      margin: 0 0 1em;
    }

    ::v-deep(li) {
      margin-bottom: 0.25em;
    }

    ::v-deep(ul, ol) {
      padding-left: 2em;
    }

    ::v-deep(ol li::marker) {
      color: $primaryColor;
      font-weight: 600;
    }

    ::v-deep(blockquote) {
      margin: 1.5em 0;
      padding: 10px 0 10px 24px;
      border-left: 4px solid $primaryColor;
      background-color: transparentize($primaryColor, 0.9);
      border-radius: 0 8px 8px 0;
    }

    ::v-deep(blockquote p) {
      font-weight: 600;
      margin-left: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
}
</style>
