<template>
  <div class="content">
    <button @click="flag = !flag">switch</button>
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
    <hr />
    <button @click="flag2 = !flag2">switch2</button>
    <transition
      enter-from-class="e-from"
      enter-active-class="e-active"
      enter-to-class="e-to"
      leave-from-class="l-from"
      leave-active-class="l-active"
      leave-to-class="l-to"
    >
      <div v-if="flag2" class="box2"></div>
    </transition>
    <hr />
    <button @click="flag3 = !flag3">switch3</button>
    <!-- :duration 动画时长 -->
    <!-- :duration="50" -->
    <!-- :duration="{enter: 50, leave: 500}" -->
    <transition
      :duration="500"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-if="flag3" class="box3"></div>
    </transition>
    <hr />
    <button @click="flag4 = !flag4">生命周期</button>
    <transition
      @before-enter="EnterFrom"
      @enter="EnterActive"
      @after-enter="EnterTo"
      @enter-cancelled="EnterCancel"
      @before-leave="LeaveFrom"
      @leave="LeaveActive"
      @after-leave="LeaveTo"
      @leave-cancelled="LeaveCancel"
    >
      <div v-if="flag4" class="box4"></div>
    </transition>
    <hr />
    <button @click="flag5 = !flag5">appear</button>
    <transition
      appear
      appear-from-class="from"
      appear-active-class="active"
      appear-to-class="to"
    >
      <div v-if="flag5" class="box5"></div>
    </transition>
    <hr />
    <button @click="add">ADD</button>
    <button @click="pop">POP</button>
    <div class="wraps">
      <transition-group
        tag="ul"
        leave-active-class="animate__animated animate__bounceOutUp"
        enter-active-class="animate__animated animate__bounceInDown"
      >
        <li class="item" v-for="(item, index) in list" :key="index">
          {{ item }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import "animate.css";
import gsap from "gsap";
const flag = ref<boolean>(true);
const flag2 = ref<boolean>(true);
const flag3 = ref<boolean>(true);
const flag4 = ref<boolean>(true);
const flag5 = ref<boolean>(true);
const list = reactive<number[]>([1, 2, 3, 4, 5, 6]);
// 生命周期
const EnterFrom = (el: Element) => {
  // console.log("动画进入之前执行");
  gsap.set(el, {
    width: 0,
    height: 0,
  });
};
const EnterActive = (el: Element, done: gsap.Callback) => {
  // console.log("过度曲线");
  // setTimeout(() => {
  //   done();
  // }, 3000);
  gsap.to(el, {
    width: 50,
    height: 50,
    onComplete: done,
  });
};
const EnterTo = (el: Element) => {
  // console.log("过度完成");
};
const EnterCancel = (el: Element) => {
  // console.log("过度效果被打断");
};
const LeaveFrom = (el: Element) => {
  // console.log("离开之前");
};
const LeaveActive = (el: Element, done: gsap.Callback) => {
  // console.log("离开过度曲线");
  // setTimeout(() => {
  //   done();
  // }, 3000);
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done,
  });
};
const LeaveTo = (el: Element) => {
  // console.log("离开完成");
};
const LeaveCancel = (el: Element) => {
  // console.log("离开被打断");
};
const add = () => {
  list.push(list.length + 1);
};
const pop = () => {
  list.pop();
};
</script>

<style lang="less" scoped>
.box {
  width: 50px;
  height: 50px;
  background-color: red;
}
// 过渡动画
.fade-enter-from {
  width: 0;
  height: 0;
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-enter-to {
  width: 50px;
  height: 50px;
}
.fade-leave-from {
  width: 50px;
  height: 50px;
}
.fade-leave-active {
  transition: all 2s ease;
}
.fade-leave-to {
  width: 0;
  height: 0;
}
.box2 {
  width: 50px;
  height: 50px;
  background-color: green;
}
.e-from {
  width: 0;
  height: 0;
}
.e-active {
  transition: all 1.5s ease;
}
.e-to {
  width: 50px;
  height: 50px;
}
.l-from {
  width: 50px;
  height: 50px;
}
.l-active {
  transition: all 2s ease;
}
.l-to {
  width: 0;
  height: 0;
}
.box3 {
  width: 50px;
  height: 50px;
  background-color: blue;
}
.box4 {
  width: 50px;
  height: 50px;
  background-color: pink;
}
.box5 {
  width: 50px;
  height: 50px;
  background-color: purple;
}
.from {
  width: 0;
  height: 0;
}
.active {
  transition: all 1.5s ease;
}
.to {
  width: 50px;
  height: 50px;
}
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}

.wraps {
  margin: 10px;
  background-color: #cce8cf;
  ul {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;
    .item {
      margin: 10px;
      font-size: 30px;
    }
  }
}
</style>
