<template>
  <div class="panel" :class="{ 'panel--large': size === PanelSize.big }">
    <h2 v-if="title" class="panel__title">{{ title }}</h2>
    <div class="panel__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

enum PanelSize {
  small = 'small',
  big = 'big',
}

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    size: {
      type: String as PropType<PanelSize>,
      default: PanelSize.small,
    },
  },

  setup() {
    return {
      PanelSize,
    }
  },
})
</script>

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

  &--large {
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
    & ::v-deep > div:first-child > *:first-child {
      margin-top: 0;
    }
    & > *:last-child,
    & ::v-deep > div:last-child > *:last-child {
      margin-bottom: 0;
    }

    ::v-deep {
      a {
        color: $highlightColor;
        text-decoration: underline;
      }

      h3 {
        margin: 12px 0 4px;
      }

      p,
      ul,
      ol {
        margin: 0 0 1em;
      }

      li {
        margin-bottom: 0.25em;
      }

      ul,
      ol {
        padding-left: 2em;
      }

      ol li::marker {
        color: $primaryColor;
        font-weight: 600;
      }

      blockquote {
        margin: 1.5em 0;
        padding: 10px 0 10px 24px;
        border-left: 4px solid $primaryColor;
        background-color: transparentize($primaryColor, 0.9);
        border-radius: 0 8px 8px 0;

        p {
          font-weight: 600;
          margin-left: 0;
          margin-bottom: 0;
          padding-bottom: 0;
        }
      }
    }
  }
}
</style>
