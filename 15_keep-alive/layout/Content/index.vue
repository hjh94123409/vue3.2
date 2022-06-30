<template>
  <div class="content">
    <button @click="switchCom">切换</button>
    <!-- :include 指定要缓存的组件名 -->
    <!-- :exclude 指定不要缓存的组件名 -->
    <!-- :max 指定缓存的个数 -->
    <keep-alive :exclude="['Login']">
      <Login v-if="flag"></Login>
      <Reg v-else></Reg>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Login from "../../components/Login/index.vue";
import Reg from "../../components/Register/index.vue";
const flag = ref(true);
const switchCom = () => {
  flag.value = !flag.value;
};
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
