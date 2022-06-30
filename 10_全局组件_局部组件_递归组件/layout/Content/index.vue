<script setup lang="ts"></script>

<template>
  <div class="content">
    <div v-for="item in 100" :key="item" class="content-items">
      <Card :content="`我是第${item}个`"></Card>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
  &-items {
    padding: 10px;
    // border: 1px solid #ccc;
  }
}
</style>
