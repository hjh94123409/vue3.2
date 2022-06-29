<script setup lang="ts">
import { ref, watchEffect } from "vue";

let msg1 = ref("飞机");
let msg2 = ref("火车");

const stop = watchEffect(
  (oninvalidate) => {
    // let ipt: HTMLInputElement = document.querySelector(
    //   "#ipt"
    // ) as HTMLInputElement;

    // console.log(ipt);

    oninvalidate(() => {
      console.log("before");
    });
    console.log("msg1:", msg1.value);
    console.log("msg2:", msg2.value);
  },
  {
    flush: "post",
    onTrigger(e) {
      debugger;
    },
  }
);

const stopWatch = () => stop();
</script>

<template>
  <div>
    <input id="ipt" v-model="msg1" type="text" />
    <input v-model="msg2" type="text" />
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<style>
div {
  padding: 5px;
  margin: 5px;
  border: 1px dashed gray;
}
</style>
