<template>
  <div class="b">
    <h3>我是B组件</h3>
    <button @click="emitB">派发一个事件</button>
  </div>
</template>

<script setup lang="ts">
import Bus from "../Bus";
const emit = defineEmits(["on-click"]);
let flag = false;
let flagBus = false;
const emitB = () => {
  flag = !flag;
  emit("on-click", flag);
  flagBus = !flagBus;
  Bus.emit("on-click-bus", flagBus);
};
</script>

<style lang="less">
.b {
  width: 200px;
  height: 200px;
  background-color: blue;
  color: #fff;
}
</style>
