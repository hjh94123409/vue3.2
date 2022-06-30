<script setup lang="ts">
type Props = {
  content?: string;
};

defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div>主标题</div>
      <div>副标题</div>
    </div>
    <div v-if="content" class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<style lang="less" scoped>
@border-color: #ccc;
.card {
  border: 1px solid @border-color;
  &:hover {
    box-shadow: 0 0 10px @border-color;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid @border-color;
  }
  &-content {
    padding: 10px;
  }
}
</style>
