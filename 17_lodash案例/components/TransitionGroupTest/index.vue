<template>
  <div>
    <button @click="random">random</button>
    <!-- 移动产生过渡动画 动画属性为所有 -->
    <transition-group class="wraps" tag="div" move-class="mmm">
      <div class="item" v-for="item in list" :key="item.id">
        {{ item.number }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import _ from "lodash";

const list = ref(
  Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
      id: index,
      number: (index % 9) + 1,
    };
  })
);
// console.log(list.value);
const random = () => {
  list.value = _.shuffle(list.value);
};
</script>

<style lang="less" scoped>
@boxWidth: 50px;
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(@boxWidth * 9 + 2px);
  border: 1px solid #ccc;
  .item {
    width: @boxWidth;
    height: @boxWidth;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.mmm {
  transition: all 0.8s;
}
</style>
