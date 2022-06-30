<template>
  <div class="content">
    <Dialog>
      <!-- <template v-slot:header> -->
      <!-- 简写形式 -->
      <template #header>
        <div>我被插入了上面</div>
      </template>
      <!-- <template v-slot="{ data, index }"> -->
      <!-- 简写形式 -->
      <template #default="{ data, index }">
        <div>{{ data.name }} --- {{ data.age }} --- {{ index }}</div>
      </template>
      <template v-slot:footer>
        <div>我被插入了下面</div>
      </template>
      <!-- 动态插槽 -->
      <template #[name]>
        <div>我在哪儿</div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Dialog from "../../components/Dialog/index.vue";
let name = ref("header");
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
