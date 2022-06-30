<template>
  <div class="content">
    <GsapTest></GsapTest>
  </div>
</template>

<script setup lang="ts">
import GsapTest from "../../components/GsapTest/index.vue";
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
