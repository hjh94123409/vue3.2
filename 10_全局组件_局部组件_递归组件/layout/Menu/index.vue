<script setup lang="ts">
import { reactive } from "vue";
import Tree from "../../components/Tree/index.vue";
import { TreeList } from "../../types/tree";

const data = reactive<TreeList[]>([
  {
    name: "no.1",
    children: [
      {
        name: "no.1-1",
        children: [
          {
            name: "no.1-1-1",
          },
        ],
      },
    ],
  },
  {
    name: "no.2",
    children: [
      {
        name: "no.2-1",
      },
    ],
  },
  {
    name: "no.3",
  },
]);

const getItem = (item: TreeList) => {
  console.log("父组件拿到了数据：", item);
};
</script>

<template>
  <div class="menu">
    导航区域
    <Tree :data="data" @on-click="getItem"></Tree>
  </div>
</template>

<style lang="less" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #ccc;
}
</style>
