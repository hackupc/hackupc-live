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
  position: relative;
  overflow: hidden;
  flex: 1 1 350px;
  margin: 16px;
  background-color: $contrastColor;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  color: $textColor;
  text-align: left;

  &--big {
    flex: 1 1 782px;
  }

  &__title {
    padding: 4px 24px;
    margin: 0;
    background-color: $primaryColor;
    color: white;
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
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

    ::v-deep(strong) {
      color: $highlightColor;
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
      padding: 10px 0 10px 24px;
      border-left: 4px solid $primaryColor;
      margin: 1.5em 0;
      background-color: transparentize($primaryColor, 0.9);
      border-radius: 0 8px 8px 0;
    }

    ::v-deep(blockquote p) {
      padding-bottom: 0;
      margin-bottom: 0;
      margin-left: 0;
      font-weight: 600;
    }

    ::v-deep(code) {
      padding: 0.33ch 0.66ch;
      background-color: $secondaryLightColor;
      border-radius: 3px;
      font-size: 1rem;
    }
  }
}
</style>
