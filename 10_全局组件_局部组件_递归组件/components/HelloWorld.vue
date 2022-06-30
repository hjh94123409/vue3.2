<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
let count = ref(0);
console.log("setup");
onBeforeMount(() => {
  console.log("创建之前：===> onBeforeMount");
});
onMounted(() => {
  console.log("创建完成：===> onMounted");
});
onBeforeUpdate(() => {
  console.log("更新之前：===> onBeforeUpdate");
});
onUpdated(() => {
  console.log("更新完成：===> onUpdated");
});
onBeforeUnmount(() => {
  console.log("卸载之前：===> onBeforeUnmount");
});
onUnmounted(() => {
  console.log("卸载完成：===> onUnmounted");
});
</script>

<template>
  <div>我是HelloWorld组件</div>
  <div>{{ count }}</div>
  <button @click="count++">更新count</button>
</template>

<style>
div {
  padding: 5px;
  margin: 5px;
  border: 1px dashed gray;
}
</style>
