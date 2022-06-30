<template>
  <div>
    <table>
      <tr>
        <td>账号</td>
        <td><input v-model="form.login" type="text" /></td>
      </tr>
      <tr>
        <td>密码</td>
        <td><input v-model="form.psd" type="password" /></td>
      </tr>
    </table>
    <button @click="submit">登录</button>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  onActivated,
  onDeactivated,
  onMounted,
  onUnmounted,
} from "vue";
const form = reactive({
  login: "",
  psd: "",
});
const submit = () => {
  console.log(form);
};

onActivated(() => {
  console.log("login onActivated");
});

onDeactivated(() => {
  console.log("login onDeactivated");
});

onMounted(() => {
  console.log("login onMounted");
});
onUnmounted(() => {
  console.log("login onUnmounted");
});
</script>

<script lang="ts">
//这里暴露一个名字，是为给keep-alive 的props属性使用
export default {
  name: "Login",
};
</script>

<style lang="less" scoped></style>
