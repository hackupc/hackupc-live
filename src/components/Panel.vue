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
  data() {
    return {
      PanelSize,
    }
  },
})
</script>

<style lang="scss">
// TODO: make this scoped when we replace all the usages of .panel outside this component
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

  p,
  ul,
  ol {
    margin: 5px 15px 5px 15px;
  }

  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  ul,
  ol {
    padding-left: 8px;
  }
  /* stylelint-disable */
  li {
    list-style: inherit;
    display: list-item;
  }
  /* stylelint-enable */

  &.large {
    flex: 1 1 782px;
  }
  a {
    color: $secondaryColor;
  }
  h1 {
    width: 100%;
    margin: 0 0 0 0;
    font-size: 20px;
    color: white;
    background-color: $primaryColor;
    text-align: center;
    padding: 5px 0;
    padding-top: 3px;
  }
  .activity-title {
    text-transform: uppercase;
    font-size: 40px;
  }
  h2 {
    margin: 5px 15px;
  }
  .panel-info {
    h3 {
      font-weight: normal;
      font-family: 'Montserrat', sans-serif;
    }
  }
  .margin-bottom {
    margin-bottom: 10px;
  }
  .text-centered {
    text-align: center;
  }
  .text-normal {
    font-weight: normal;
  }
  .no-indent {
    padding-left: 0;
  }

  .label {
    display: inline;
  }

  /* stylelint-disable */
  & > div {
    /* stylelint-enable */
    margin: 15px 15px;
    p,
    h1,
    h2 {
      margin: 0 0;
    }
  }

  .get-there {
    .get-subtitle {
      margin-top: 0;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 5px;
    }
    h2 {
      margin-bottom: 15px;
    }
    .get-separator {
      margin-top: 15px;
      border-top: 1px solid #49494933;
      padding-bottom: 25px;
    }
    .get-accessible {
      margin-top: 20px;
    }
  }
}
</style>
