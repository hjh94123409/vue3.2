<template>
  <div class="a">
    <h2>我是A组件</h2>
    <div>
      {{ flag }}
    </div>
    <B></B>
  </div>
</template>

<script setup lang="ts">
import B from "./B.vue";
import { inject } from "vue";

let flag = inject("flag");
</script>

<style lang="less">
.a {
  width: 200px;
  height: 200px;
  background-color: green;
  color: #fff;
}
</style>
