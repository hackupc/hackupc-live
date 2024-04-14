<script setup lang="ts">
interface Props {
  title?: string
  size?: 'big' | 'small'
  panelContentImage?: string
}
defineProps<Props>()
</script>

<template>
  <div class="panel" :class="{ 'panel--big': size === 'big' }">
    <h2 v-if="title" class="panel__title">{{ title }}</h2>
    <div
      class="panel__content"
      :style="{
        backgroundImage:
          panelContentImage !== undefined ? panelContentImage : 'none',
      }"
      :class="{ panel__content__image: panelContentImage !== undefined }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/variables' as *;

.panel {
  position: relative;
  overflow: hidden;
  flex: 1 1 350px;
  margin: 16px;
  background-color: $contrast-color;
  border-radius: $border-radius;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  color: $text-color;
  text-align: left;

  &--big {
    flex: 1 1 1300px;
  }

  &__title {
    padding: 12px 24px;
    margin: 0;
    background-color: $primary-color;
    border-radius: $border-radius $border-radius 0 0;
    color: #fff;
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
  }

  &__content {
    padding: 24px;
    line-height: 1.6;

    > *:first-child,
    ::v-deep(* > div:first-child > *:first-child) {
      margin-top: 0;
    }

    > *:last-child,
    ::v-deep(* > div:last-child > *:last-child) {
      margin-bottom: 0;
    }

    ::v-deep(strong) {
      color: $highlight-color;
    }

    ::v-deep(a) {
      color: $links-color;
      font-weight: bold;

      &:hover {
        color: color.adjust($links-color-hover, $lightness: -10%);
      }
    }

    ::v-deep(h3) {
      margin: 12px 0 4px;
    }

    ::v-deep(p, ul, ol) {
      margin: 0 0 1em;
    }

    ::v-deep(li) {
      margin-bottom: 0.5em;
    }

    ::v-deep(ul, ol) {
      padding-left: 2em;
    }

    ::v-deep(ol li::marker) {
      margin-right: 6px;
      color: $primary-color;
      font-weight: 600;
    }

    ::v-deep(blockquote) {
      padding: 10px 0 10px 24px;
      border-left: 4px solid $primary-color;
      margin: 0 0 1.5em;
      background-color: color.adjust($primary-color, $alpha: -0.9);
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
      background-color: $secondary-light-color;
      border-radius: 3px;
      font-size: 1rem;
    }

    &__image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
