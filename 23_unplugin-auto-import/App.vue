<template>
  <div class="container">
    <button @click="flag = !flag">change flag</button>
    <div>
      {{ flag }}
    </div>
  </div>
</template>

<script setup lang="ts">
let flag = ref<boolean>(false);
</script>

<style lang="less">
.container {
  padding: 30px;
  background-color: #cce8cf;
}
</style>
