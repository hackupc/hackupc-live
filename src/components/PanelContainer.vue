<script setup lang="ts">
interface Props {
  id?: string
}
defineProps<Props>()
</script>

<template>
  <div :id="id" class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: 1024px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  padding-top: 150px;
  padding-bottom: 50px;
  margin: 0 auto;

  @media (max-width: 720px) {
    padding-top: 60px;
  }

  .no-margin {
    div {
      margin: 0;
    }
  }
}
</style>
