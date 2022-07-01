<template>
  <div class="a">
    <h2>我是A组件</h2>
    <button @click="emit">emit</button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const emit = () => {
  instance?.proxy?.$Bus.emit("on-hehele", "mitt");
  // instance?.proxy?.$Bus.emit("on-hehele2", "mitt2");
};
</script>

<style lang="less">
.a {
  width: 200px;
  height: 200px;
  background-color: green;
  color: #fff;
  font-size: 30px;
  h6 {
    font-size: 16px;
  }
}
</style>
