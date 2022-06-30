<template>
  <div>
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <div v-for="(item, index) in data">
        <slot :index="index" :data="item"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

type Names = {
  name: string;
  age: number;
};
const data = reactive<Names[]>([
  {
    name: "名字————1",
    age: 101,
  },
  {
    name: "名字————2",
    age: 102,
  },
  {
    name: "名字————3",
    age: 103,
  },
  {
    name: "名字————4",
    age: 104,
  },
]);
</script>

<style lang="less" scoped>
.header {
  height: 200px;
  background-color: red;
  color: #fff;
}
.main {
  height: 300px;
  background-color: green;
  color: #fff;
}
.footer {
  height: 200px;
  background-color: blue;
  color: #fff;
}
</style>
