<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  videoUrl: string
}
const props = defineProps<Props>()

const videoThumbnail = computed(() => {
  const videoId = props.videoUrl.match(
    /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  )?.[1]

  return `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
})
</script>

<template>
  <a :href="videoUrl" class="video" target="_blank" rel="noopener noreferrer">
    <img
      :src="videoThumbnail"
      alt="Video thumbnail"
      class="video__thumbnail"
      loading="lazy"
    />
    <img
      src="@/assets/img/video-thumbnail-play.svg"
      alt=""
      class="video__play"
    />
  </a>
</template>

<style lang="scss" scoped>
.video {
  display: block;
  position: relative;
  margin: 0 auto 2rem;
  max-width: 432px;

  &__thumbnail {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  &__play {
    position: absolute;
    height: 8rem;
    bottom: 0;
    right: 0;
    transform: translate(0, 50%);
  }
}
</style>
