<script setup lang="ts">
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Content from "./Content/index.vue";
import { reactive, ref } from "vue";

const menus = ref(null);

const list = reactive<number[]>([1, 2, 3, 4, 5]);

const getData = (data: number[], flag: boolean) => {
  console.log("我是子组件传过来的数据", data, flag);
};
const getHehele = (data: number[], flag: boolean) => {
  // console.log("呵呵了：", data, flag);
  console.log(menus.value);
};
</script>

<template>
  <div class="layout">
    <Menu
      ref="menus"
      @on-hehele="getHehele"
      @on-click="getData"
      title="我是标题"
      :list="list"
      defautValue="哈哈"
    ></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
