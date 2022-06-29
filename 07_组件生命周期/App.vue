<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
let flag = ref(true);
</script>

<template>
  <HelloWorld v-if="flag" />
  <button @click="flag = !flag">改变组件状态</button>
</template>

<style>
div {
  padding: 5px;
  margin: 5px;
  border: 1px dashed gray;
}
</style>
