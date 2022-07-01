<template>
  <div class="container">
    <renderDom @on-click="getNum" title="这样的话和react一样吗"></renderDom>
  </div>
</template>

<script setup lang="ts">
import renderDom from "./App";
const getNum = (num: number) => {
  console.log(num);
};
</script>

<style lang="less">
.container {
  padding: 30px;
  background-color: #cce8cf;
}
</style>
