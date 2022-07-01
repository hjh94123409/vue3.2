<template>
  <div class="container">
    <button @click="flag = !flag">change {{ flag }}</button>
    <div>标题 {{ title }}</div>
    <Dialog v-model:title.aaa="title" v-model.hehele="flag"></Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from "./components/Dialog.vue";
let flag = ref<boolean>(true);
let title = ref<string>("我是一条狗");
</script>

<style lang="less">
.container {
  padding: 30px;
  background-color: #cce8cf;
}
</style>
