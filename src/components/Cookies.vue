<script setup lang="ts">
import { XIcon } from '@heroicons/vue/solid'
import { useStorage } from '@vueuse/core'

const hasAcceptedCookies = useStorage('cookies', false)

const acceptCookies = function () {
  hasAcceptedCookies.value = true
}
</script>

<template>
  <div
    id="gdpr"
    class="gdpr"
    :class="{ 'gdpr--hidden': hasAcceptedCookies }"
    :aria-hidden="hasAcceptedCookies"
  >
    <span class="gdpr__emoji">🍪</span>
    <span class="gdpr__text">
      By browsing this website, you consent to the use of cookies and agree to
      our
      <a
        class="gdpr__link"
        href="https://legal.hackersatupc.org/hackupc/privacy_and_cookies"
        hreflang="en"
        target="_blank"
        rel="noopener noreferrer"
        :tabindex="hasAcceptedCookies ? -1 : undefined"
        >privacy policy</a
      >.
    </span>
    <button
      id="gdpr-close"
      class="gdpr__button"
      type="button"
      aria-label="Close GDPR notification"
      :disabled="hasAcceptedCookies"
      @click="acceptCookies"
    >
      <XIcon class="gdpr__close-icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
$ease-bounce: cubic-bezier(0.18, 0.89, 0.32, 1.28);
$ease-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

.gdpr {
  position: fixed;
  z-index: 100;
  right: 0.5rem;
  bottom: 0.5rem;
  left: 0.5rem;
  display: flex;
  max-width: 1000px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0 auto;
  background-color: #0c0c0c;
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 30%);
  color: #fff;
  transition: transform 400ms $ease-quad, opacity 400ms $ease-quad;

  // animation: gdpr-show 400ms $ease-bounce;
  // @keyframes gdpr-show {
  //   from {transform: translateY(100%); opacity: 0.5;}
  //   to   {transform: translateY(0%); opacity: 1;}
  // }

  @media (min-width: 640px) {
    right: 1.5rem;
    bottom: 1.5rem;
    left: 1.5rem;
    padding: 1rem;
  }

  &--hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(100%);
  }

  &__emoji {
    margin-right: 0.5rem;
    cursor: default;
    font-size: 1.5rem;
    line-height: 1;
    transition: transform 250ms $ease-bounce;

    @media (min-width: 640px) {
      margin-right: 0.75rem;
    }

    &:hover {
      transform: rotate(90deg);
    }
  }

  &__text {
    flex: 1;
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.5;

    @media (min-width: 640px) {
      font-size: 1rem;
    }
  }

  &__link {
    text-shadow: 0 0 1rem rgb(0 0 0 / 66.7%);
  }

  &__button {
    flex-shrink: 0;
    padding: 0.5rem;
    border: 0;
    margin: -0.25rem -0.25rem -0.25rem 0;
    background-color: transparent;
    border-radius: 0.5rem;
    color: #fff;
    cursor: url('../assets/img/rocket-fire.png'), auto;

    &:hover,
    &:focus {
      background-color: hsl(0deg 0% 100% / 30%);
      outline: none;
    }
  }

  &__close-icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    color: currentcolor;
  }
}
</style>
