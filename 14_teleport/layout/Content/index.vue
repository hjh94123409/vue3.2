<template>
  <div class="content">
    <teleport to="body">
      <div class="loading">Loading...</div>
    </teleport>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #cce8cf;
  width: 120px;
  height: 120px;
  text-align: center;
}
</style>
