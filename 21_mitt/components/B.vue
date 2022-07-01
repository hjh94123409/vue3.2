<template>
  <div class="b">
    <h3>我是B组件</h3>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";

const instance = getCurrentInstance();

// instance?.proxy?.$Bus.on("on-hehele", (str: string) => {
//   console.log(str);
// });

// instance?.proxy?.$Bus.on("*", (type, str) => {
//   console.log(type, str);
// });

const Bus = (str: any) => {
  console.log(str, "===");
};

instance?.proxy?.$Bus.on("on-hehele", Bus);

// instance?.proxy?.$Bus.off("on-hehele", Bus);

instance?.proxy?.$Bus.all.clear();
</script>

<style lang="less">
.b {
  width: 200px;
  height: 200px;
  background-color: blue;
  color: #fff;
}
</style>
