<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { axios } from "./server";

const list = await axios("./data.json");

console.log(list);
</script>

<style lang="less" scoped></style>
