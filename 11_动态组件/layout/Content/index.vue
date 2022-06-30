<template>
  <div class="content">
    <div class="tab">
      <div @click="switchCom(item)" v-for="(item, index) in data" :key="index">
        {{ item.name }}
      </div>
    </div>
    <component :is="current.comName"></component>
    <!-- <component :is="DDD"></component> -->
    <component is="DDD"></component>
  </div>
</template>

<script setup lang="ts">
import { reactive, markRaw } from "vue";
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
import DDD from "./DDD.vue";
type Tabs = {
  name: string;
  comName: any;
};
type Com = Pick<Tabs, "comName">;
const data = reactive<Tabs[]>([
  {
    name: "我是A组件",
    comName: markRaw(A),
  },
  {
    name: "我是B组件",
    comName: markRaw(B),
  },
  {
    name: "我是C组件",
    comName: markRaw(C),
  },
]);
const current = reactive<Com>({
  comName: data[0].comName,
});
const switchCom = (item: Tabs) => {
  current.comName = item.comName;
};
</script>

<script lang="ts">
export default {
  components: {
    DDD,
  },
};
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
  &-items {
    padding: 10px;
    // border: 1px solid #ccc;
  }
  .tab {
    display: flex;
    > div {
      border: 1px solid #ccc;
      margin: 5px;
      padding: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
