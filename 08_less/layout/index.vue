<script setup lang="ts">
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Content from "./Content/index.vue";
</script>

<template>
  <div class="layout">
    <Menu title="我是标题"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
