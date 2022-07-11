<template>
  <div class="box">
    <img id="img" src="./assets/img/01.jpeg" alt="" />
  </div>
</template>

<script setup lang="ts">
import useBase64 from "./hooks";

useBase64({ el: "#img" }).then((res) => {
  console.log(res.baseUrl);
});
</script>

<style lang="less" scoped>
.box {
  width: 500px;
}
img {
  display: block;
  width: 100%;
}
</style>
