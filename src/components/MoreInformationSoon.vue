<template>
  <div class="secret">
    <div class="secret__title">Working on it</div>
    <div class="secret__text">More information coming soon</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.secret {
  --title-blur: 3px;
  --text-blur: 1.5px;

  padding: 0 0 1rem;
  color: $text-soft-color;
  cursor: help;
  font-style: italic;
  line-height: 1;
  text-align: center;

  &:hover {
    --title-blur: 0;
    --text-blur: 0;
  }

  &__title {
    margin: 0 0 1rem;
    filter: blur(var(--title-blur, 3px));
    font-size: 3rem;
    font-weight: bold;
    transition: filter ease-out 500ms;
  }

  &__text {
    margin: 0;
    filter: blur(var(--text-blur, 1.5px));
    font-size: 1.5rem;
    transition: filter ease-out 500ms;
  }
}
</style>
