<script setup lang="ts">
import { reactive } from "vue";

const myData = reactive([6, 6, 6]);

type Props = {
  title: string;
  list?: number[];
  defautValue?: string;
};

withDefaults(defineProps<Props>(), {
  defautValue: "我是一个默认值，可以不传",
  list: () => [1, 2, 3],
});

const emit = defineEmits(["on-click", "on-hehele"]);
const clickTap = () => {
  emit("on-click", myData, false);
};
const heheleTap = () => {
  emit("on-hehele", myData, true);
};
defineExpose({
  myData,
});
</script>

<template>
  <div class="menu">
    导航区域
    <h1>{{ title }}</h1>
    <h3>{{ defautValue }}</h3>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <div>
      <button @click="clickTap">派发</button>
      <button @click="heheleTap">派发2</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.menu {
  width: 200px;
  border-right: 1px solid gray;
}
</style>
