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
      ><span>{{ title }}</span></b
    >&ensp;{{ text }}<br /><br />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

export enum DiscordType {
  chat = 'chat',
  voice = 'voice',
}

export interface DiscordLabelData {
  title: string
  text: string
  icon?: DiscordType
}

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
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
