<template>
  <div style="margin-left: 10px">
    <div
      v-for="(item, index) in data"
      :key="index"
      @click.stop="clickItem(item)"
    >
      {{ item.name }}
      <Tree
        @on-click="clickItem"
        v-if="item?.children?.length"
        :data="item.children"
      ></Tree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TreeList } from "../../types/tree";
// import Tree from "./index.vue"; //第一种方式
type Props = {
  data?: TreeList[];
};
defineProps<Props>();
const emit = defineEmits(["on-click"]);
const clickItem = (item: TreeList) => {
  //   console.log(item);
  emit("on-click", item);
};
</script>

<script lang="ts">
//第二种方式
export default {
  name: "Tree",
};
</script>

<style lang="less" scoped></style>
