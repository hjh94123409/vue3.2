<template>
  <div>
    我是插槽
    <slot></slot>
    <hr />
    <div class="dtcss">动态CSS</div>
    <button @click="changeColor">改变颜色</button>
  </div>
</template>

<script setup lang="ts">
// const style = ref("purple");
const style = ref({
  color: "red",
  fontSize: "30px",
});
const changeColor = () => {
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  style.value.color = `rgb(${a}, ${b}, ${c})`;
};
</script>

<style lang="less" scoped>
:global(div) {
  border: 1px solid #ccc;
}
:slotted(.a) {
  color: red;
}
.dtcss {
  color: v-bind("style.color");
  font-size: v-bind("style.fontSize");
}
</style>
