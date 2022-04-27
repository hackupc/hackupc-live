<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  videoUrl: string
}
const props = defineProps<Props>()

function isYoutubeUrl(url: string): boolean {
  return /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)/.test(url)
}
function isTwitchUrl(url: string): boolean {
  return /(?:https?:\/{2})?(?:w{3}\.)?twitch\.tv/.test(url)
}

const videoThumbnail = computed<string>(() => {
  if (isYoutubeUrl(props.videoUrl)) {
    const videoId = props.videoUrl.match(
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
    )?.[1]

    return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  }

  if (isTwitchUrl(props.videoUrl)) {
    return 'https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_large/public/blog/twitch-logo-1138x658.jpg'
  }

  return ''
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
  position: relative;
  display: block;
  max-width: 432px;
  margin: 0 auto 2rem;

  &__thumbnail {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgb(0 0 0 / 40%);
    object-fit: cover;
  }

  &__play {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 8rem;
    transform: translate(0, 50%);
  }
}
</style>
