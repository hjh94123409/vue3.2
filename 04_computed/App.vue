<script setup lang="ts">
import { ref, computed, reactive } from "vue";
let firstName = ref("姓");
let lastName = ref("名");
const name = computed(() => {
  return firstName.value + "---" + lastName.value;
});
const name2 = computed({
  get() {
    return firstName.value + "---" + lastName.value;
  },
  set() {
    firstName.value + "---" + lastName.value;
  },
});

type Shop = {
  name: string;
  num: number;
  price: number;
};

let $total = ref(0);

const data = reactive<Shop[]>([
  {
    name: "我的上衣",
    num: 1,
    price: 100,
  },
  {
    name: "我的鞋子",
    num: 1,
    price: 200,
  },
  {
    name: "我的裤子",
    num: 1,
    price: 300,
  },
]);

const addAndSub = (item: Shop, type: boolean): void => {
  if (item.num > 1 && !type) {
    item.num--;
  }
  if (item.num < 99 && type) {
    item.num++;
  }
  // total();
};

const del = (index: number) => {
  data.splice(index, 1);
  // total();
};

// const total = () => {
//   $total.value = data.reduce((prev, next) => {
//     return prev + next.num * next.price;
//   }, 0);
// };
// total();

//计算属性实现
$total = computed<number>(() => {
  return data.reduce((prev, next) => {
    return prev + next.num * next.price;
  }, 0);
});
</script>

<template>
  <input v-model="firstName" type="text" />
  <input v-model="lastName" type="text" />
  <div>{{ firstName }}---{{ lastName }}</div>
  <div>{{ name }}</div>
  <div>{{ name2 }}</div>
  <hr />
  <table border width="100%">
    <thead>
      <tr>
        <th>名称</th>
        <th>数量</th>
        <th>单价</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody align="center">
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }}</td>
        <td>
          <button @click="addAndSub(item, false)">-</button>
          {{ item.num }}
          <button @click="addAndSub(item, true)">+</button>
        </td>
        <td>{{ item.price * item.num }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">总价：{{ $total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<style>
div {
  padding: 5px;
  margin: 5px;
  border: 1px dashed gray;
}
</style>
