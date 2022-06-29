<script setup lang="ts"></script>

<template>
  <div class="content">
    <div v-for="item in 100" :key="item" class="content-items">
      {{ item }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid gray;
  overflow: auto;
  &-items {
    padding: 20px;
    border: 1px solid grey;
  }
}
</style>
