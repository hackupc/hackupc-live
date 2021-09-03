<script lang="ts">
import { DiscordType } from '@/data/home'
import { defineComponent, PropType } from 'vue'
import IconLabel from '@/components/IconLabel.vue'
import { VolumeUpIcon, HashtagIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    IconLabel,
    VolumeUpIcon,
    HashtagIcon,
  },
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

<template>
  <div>
    <icon-label>
      <template #icon>
        <volume-up-icon v-if="icon === DiscordType.voice" />
        <hashtag-icon v-else-if="icon === DiscordType.chat" />
      </template>
      <b>{{ name }}</b>
    </icon-label>
    {{ description }}
  </div>
</template>

<style lang="scss" scoped></style>
