<template>
  <div>
    <input v-model="num.current" type="number" step="20" />
    <div>
      {{ num.tweenNumber.toFixed(0) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { reactive, watch } from "vue";
const num = reactive({
  current: 0,
  tweenNumber: 0,
});
watch(
  () => num.current,
  (newVal, oldVal) => {
    gsap.to(num, {
      duration: 1,
      tweenNumber: newVal,
    });
  }
);
</script>

<style lang="less" scoped></style>
