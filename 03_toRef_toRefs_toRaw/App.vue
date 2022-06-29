<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from "vue";

const obj = reactive({
  foo: 1,
  bar: 1,
});

const { foo, bar } = toRefs(obj);

console.log(foo, bar);

const state = toRef(obj, "bar");

const change = () => {
  obj.bar++;

  console.log("原始对象", obj);

  console.log("引用对象", state);
};

//把响应式对象变为普通对象
const raw = toRaw(obj);
console.log(raw);
</script>

<template>
  <div>
    <button @click="change">change</button>
    {{ state }}
  </div>
</template>

<style>
div {
  padding: 5px;
  margin: 5px;
  border: 1px dashed gray;
}
</style>
