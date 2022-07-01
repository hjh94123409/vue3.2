<template>
  <div class="a">
    <h2>我是A组件</h2>
    {{ flag }}
    <hr />
    <h6>我是Bus传递过来的值：{{ flagBus }}</h6>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Bus from "../Bus";
type Props = {
  flag: boolean;
};
defineProps<Props>();
let flagBus = ref(false);
Bus.on("on-click-bus", (flag: boolean) => {
  flagBus.value = flag;
});
</script>

<style lang="less">
.a {
  width: 200px;
  height: 200px;
  background-color: green;
  color: #fff;
  font-size: 30px;
  h6 {
    font-size: 16px;
  }
}
</style>
