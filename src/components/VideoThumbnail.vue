<template>
  <a :href="videoUrl" class="video" target="_blank">
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
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const videoThumbnail = computed(() => {
      const videoId = props.videoUrl.match(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      )?.[1]

      return `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    })

    return {
      videoThumbnail,
    }
  },
})
</script>

<style lang="scss" scoped>
.video {
  display: block;
  position: relative;
  margin-bottom: 2rem;

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
