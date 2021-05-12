<template>
  <div
    class="cookies-notice"
    :class="{ 'cookies-notice--hidden': !showBanner }"
  >
    <p class="cookies-notice__text">
      This website uses cookies of its own and of third parties to improve your
      browsing experience and show you personalized content based on your
      interests. If you continue browsing, we consider that you accept its use.
      You can obtain more information in our
      <a
        class="cookies-notice__link"
        href="/privacy_and_cookies"
        target="_blank"
        rel="noopener"
        >Privacy and Cookies Policy</a
      >
    </p>
    <button
      class="cookies-notice__button"
      @click="acceptCookies()"
      title="Close"
    >
      OK
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const showBanner = ref(false)

    onMounted(() => {
      if (window.localStorage.getItem('cookies') !== '1') {
        showBanner.value = true
      }
    })

    const acceptCookies = function () {
      window.localStorage.setItem('cookies', '1')
      showBanner.value = false
    }

    return {
      showBanner,
      acceptCookies,
    }
  },
})
</script>

<style lang="scss" scoped>
.cookies-notice {
  position: fixed;
  right: 0;
  bottom: -16px;
  left: 0;
  transition: transform 200ms ease-out, opacity 200ms ease-out;
  background-color: #171c18;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  animation: slide-up 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  z-index: 1000;
  border-bottom: solid transparent 16px;

  &--hidden {
    transform: translateY(100%);
    pointer-events: none;
    opacity: 0;
    flex-grow: 1;
  }

  &__text {
    font-size: 0.8em;
    line-height: 1;
    max-width: 800px;
  }

  &__link {
    color: #69a9e9;
  }

  &__button {
    border: none;
    border-bottom: solid #003569 4px;
    background: #0066cc;
    color: #fff;
    font-size: 0.8em;
    font-weight: bold;
    margin-left: 16px;
    padding: 4px 10px;
    cursor: pointer;
  }

  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>
