<template>
  <div class="container">
    <h1>我是根组件</h1>
    <A :flag="Flag" />
    <hr />
    <B @on-click="getFlag" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";

let Flag = ref(false);
const getFlag = (params: boolean) => {
  Flag.value = params;
};
</script>

<style lang="less">
.container {
  padding: 30px;
  background-color: #cce8cf;
}
</style>
