<template>
  <div>
    <p class="icon">
      <i
        class="fas"
        :class="{
          'fa-volume-up': icon === DiscordType.voice,
          'fa-hashtag': icon === DiscordType.chat,
        }"
        aria-hidden="true"
      ></i>
    </p>
    <b
      ><span class="highlight-span">{{ name }}</span></b
    >&ensp;{{ description }}
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export enum DiscordType {
  chat = 'chat',
  voice = 'voice',
}

export interface DiscordLabelData {
  name: string
  description: string
  icon?: DiscordType
}

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String as PropType<DiscordType>,
      default: DiscordType.chat,
    },
  },
  data() {
    return {
      DiscordType,
    }
  },
})
</script>

<style lang="scss" scoped></style>
