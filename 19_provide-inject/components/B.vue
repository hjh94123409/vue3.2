<template>
  <div class="b">
    <h3>我是B组件</h3>
    <button @click="changeFlag">change Flag</button>
    <div>
      {{ flag }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref, getCurrentInstance } from "vue";

// console.log(getCurrentInstance());

let flag = inject<Ref<boolean>>("flag", ref(false));

const changeFlag = () => {
  flag.value = true;
};
</script>

<style lang="less">
.b {
  width: 100px;
  height: 100px;
  background-color: blue;
  color: #fff;
}
</style>
