<template>
  <div class="panel" :class="{ 'panel--large': size === PanelSize.big }">
    <h2 v-if="title" class="panel__title">{{ title }}</h2>
    <div class="panel__content">
      <slot></slot>
    </div>
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
  data() {
    return {
      PanelSize,
    }
  },
})
</script>

<style lang="scss" scoped>
.panel {
  border-radius: $borderRadius;
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
        color: $secondaryColor;
      }

      h3 {
        margin: 12px 0 4px;
      }

      p,
      ul,
      ol,
      li {
        margin: 0 0 1em;
      }

      ul,
      ol {
        padding-left: 1em;
      }
    }
  }
}
</style>
