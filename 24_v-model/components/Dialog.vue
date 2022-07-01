<template>
  <div class="dialog" v-if="modelValue">
    <div class="dialog-header">
      <div>标题---{{ title }}</div>
      <div @click="close">x</div>
    </div>
    <div class="dialog-content"></div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: boolean;
  title: string;
  modelModifiers?: {
    hehele: boolean;
  };
  titleModifiers?: {
    aaa: boolean;
  };
};
const PropsData = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "update:title"]);
const close = () => {
  console.log(PropsData.modelModifiers);
  if (PropsData.modelModifiers?.hehele) {
    emit("update:title", "我是一条狗");
  } else {
    emit("update:title", "我是一只猫");
  }
  emit("update:modelValue", false);
};
</script>

<style lang="less" scoped>
.dialog {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  &-content {
    padding: 10px;
  }
}
</style>
