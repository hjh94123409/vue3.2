<script setup lang="ts">
import { reactive, readonly, shallowReactive } from "@vue/reactivity";

type O = {
  list: number[];
};

let message = reactive<O>({
  list: [],
});

setTimeout(() => {
  let arr = [1, 2, 3, 4, 5];
  // message = arr; //不可以
  // message.push(...arr); // 可以
  message.list = arr; //可以
  console.log(message);
}, 1000);

const person = reactive({
  name: "呵呵",
});
person.name = "哈哈";

let copyPerson = readonly(person); //只读，不可以修改

let obj = shallowReactive({
  test: "我是第一层",
  nav: {
    bar: {
      name: "我是深层次",
    },
  },
});

const change1 = () => {
  obj.test = "我被改了";
};

const change2 = () => {
  obj.nav.bar.name = "我也被改了";
};

// change1();//这样可以修改
// change2();//这样可以修改
</script>

<template>
  <div>arr {{ message }}</div>
  <div>{{ message.list }}</div>
  <div>{{ person }}</div>
  <div>{{ obj.test }}</div>
  <div>{{ obj.nav.bar.name }}</div>
  <button @click="change1">1</button>
  <button @click="change2">2</button>
</template>

<style>
div {
  padding: 5px;
  margin: 5px;
  border: 1px dashed gray;
}
</style>
