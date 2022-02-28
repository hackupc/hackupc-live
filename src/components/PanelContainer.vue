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
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 50px;
  padding-top: 150px;

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
