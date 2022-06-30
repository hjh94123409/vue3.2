<template>
  <div class="content">
    <Suspense>
      <template #default>
        <A></A>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
// import A from "../../components/A/index.vue";
const A = defineAsyncComponent(() => import("../../components/A/index.vue"));
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
