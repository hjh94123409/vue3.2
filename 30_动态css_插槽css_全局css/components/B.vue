<template>
  <!-- <div :class="[$style.div, $style.border]">我是动态CSS</div> -->
  <div :class="[zs.div, zs.border]">我是动态CSS</div>
</template>

<script setup lang="ts">
const css = useCssModule("zs");
console.log(css);
</script>

<style module="zs">
.div {
  color: red;
}
.border {
  border: 1px solid red;
}
</style>
