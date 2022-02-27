<script setup lang="ts">
import type { DiscordType } from '@/data/home'
import IconLabel from '@/components/IconLabel.vue'
import { HashtagIcon, VolumeUpIcon } from '@heroicons/vue/solid'

defineProps<{
  name: string
  description: string
  icon: DiscordType
}>()
</script>

<template>
  <div>
    <IconLabel>
      <template #icon>
        <VolumeUpIcon v-if="icon === 'voice'" />
        <HashtagIcon v-else-if="icon === 'chat'" />
      </template>
      <b>{{ name }}</b>
    </IconLabel>
    {{ description }}
  </div>
</template>
