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
import { DiscordType } from '@/data/home'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
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
  setup() {
    return {
      DiscordType,
    }
  },
})
</script>

<style lang="scss" scoped></style>
