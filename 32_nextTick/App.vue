<template>
  <div>
    <input v-model="message" type="text" />
    <div ref="div">{{ message }}</div>
    <button @click="change">change</button>
  </div>
</template>

<script setup lang="ts">
const message = ref<string>("呵呵了");
const div = ref<HTMLElement>();
const change = async () => {
  message.value = "哈哈";
  await nextTick();
  console.log(div.value?.innerText);
};
</script>

<style lang="less" scoped></style>
