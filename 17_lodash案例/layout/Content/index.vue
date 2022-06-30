<template>
  <div class="content">
    <TransitionGroupTest></TransitionGroupTest>
  </div>
</template>

<script setup lang="ts">
import TransitionGroupTest from "../../components/TransitionGroupTest/index.vue";
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
