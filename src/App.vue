<template>
  <el-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
<style lang="less">
.el-input {
  .el-input__wrapper {
    box-shadow: 0 0 0 1px red;
    :deep(.el-input__inner) {
      background-color: red;
    }
  }
}
</style>
