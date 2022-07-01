<template>
  <div id="app">
    <h1>我是根组件</h1>
    <A></A>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import A from "./components/A.vue";
provide("flag", ref(false));
</script>

<style lang="less">
#app {
  width: 300px;
  height: 300px;
  background-color: red;
  color: #fff;
}
</style>
