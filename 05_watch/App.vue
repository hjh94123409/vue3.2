<script setup lang="ts">
import { ref, watch, reactive } from "vue";
let msg = ref("");
let hehe = ref("");
// let mess = ref({ //如果用ref定义，必须加deep:true，
//   nav: {
//     bar: {
//       name: "嘿嘿",
//     },
//   },
// });
let mess = reactive({
  //如果用reactive定义，加deep:true或不加都一样
  nav: {
    bar: {
      name: "嘿嘿",
    },
  },
});
//监听一个
// watch(msg, (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// })

// 监听多个
// watch([msg, hehe], (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// });

// 深度监听
watch(
  mess,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    // deep: true,
    // immediate: true,
  }
);

type Per = {
  name: string;
  age: number;
};

// 监听对象中某个属性
let person = reactive<Per>({
  name: "呵呵了",
  age: 23,
});

watch(
  () => person.name,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);
</script>

<template>
  <input type="text" v-model="msg" />
  <input v-model="hehe" type="text" />
  <input v-model="mess.nav.bar.name" type="text" />
  <hr />
  <input v-model="person.name" type="text" />
</template>

<style>
div {
  padding: 5px;
  margin: 5px;
  border: 1px dashed gray;
}
</style>
