<template>
  <div class="container">
    <button @click="flag = !flag">切换</button>
    <!-- <A v-if="flag" v-move:aaa.hehele="{ background: 'red', flag: flag }"></A> -->
    <!-- flag 值有更新，触发beforeUpdate与updated -->
    <A v-move:aaa.hehele="{ background: 'red', flag: flag }"></A>
    <hr />
    <input v-model="value" type="text" />
    <B v-haha="{ background: value }"></B>
    <hr />
    <div v-drag class="box">
      <div class="header"></div>
      <div class="con">内容</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
let flag = ref<boolean>(true);
let value = ref<string>("");
type Dir = {
  background: string;
};
const vMove: Directive = {
  created() {
    console.log("=======>created");
  },
  beforeMount() {
    console.log("=======>beforeMount");
  },
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log("=======>mounted");
    // console.log(dir.value);
    el.style.background = dir.value.background;
  },
  beforeUpdate() {
    //值有更新时触发
    console.log("=======>beforeUpdate");
  },
  updated() {
    console.log("=======>updated");
  },
  beforeUnmount() {
    console.log("=======>beforeUnmount");
  },
  unmounted() {
    console.log("=======>unmounted");
  },
};

//简写形式
const vHaha: Directive = (el: HTMLElement, bingding: DirectiveBinding<Dir>) => {
  el.style.background = bingding.value.background;
};

//小案例
const vDrag: Directive<any, void> = (
  el: HTMLElement,
  bingding: DirectiveBinding
) => {
  let dragElement: HTMLDivElement = el.firstElementChild as HTMLDivElement;
  console.log(dragElement);
  const mouseDown = (e: MouseEvent) => {
    let X = e.clientX - el.offsetLeft;
    let Y = e.clientY - el.offsetTop;
    const mouseMove = (e: MouseEvent) => {
      el.style.left = e.clientX - X + "px";
      el.style.top = e.clientY - Y + "px";
    };
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", mouseMove);
    });
  };
  dragElement.addEventListener("mousedown", mouseDown);
};
</script>

<style lang="less">
.container {
  padding: 30px;
  background-color: #cce8cf;
}
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 3px solid black;
  .header {
    height: 20px;
    background-color: black;
  }
  .con {
    background-color: antiquewhite;
    height: calc(100% - 20px);
  }
}
</style>
