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
  max-width: 1300px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 140px 60px 50px;
  margin: 0 auto;

  @media (max-width: 720px) {
    padding: 80px 20px 40px;
  }

  .no-margin {
    div {
      margin: 0;
    }
  }
}
</style>
