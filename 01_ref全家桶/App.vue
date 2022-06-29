<script setup lang="ts">
import {
  ref,
  Ref,
  isRef,
  shallowRef,
  triggerRef,
  customRef,
} from "@vue/reactivity";

const message: Ref<string> = ref("呵呵了");

const noRef: Number = 10;

const changeMsg = () => {
  // message.value = "我改名了";
  // console.log(isRef(message));
  // console.log(isRef(noRef));
  person.value.name = "大大";
  triggerRef(person);

  myRef.value = 12;
};

const person = shallowRef({
  name: "小小",
});

function MyRef<T>(value: T) {
  return customRef((trank, trigger) => {
    return {
      get() {
        trank();
        return value;
      },
      set(newVal: T) {
        console.log("set");
        value = newVal;
        trigger();
      },
    };
  });
}
let myRef = MyRef<number>(10);
</script>

<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ person.name }}</div>
  </div>
  <div>
    {{ myRef }}
  </div>
</template>

<style></style>
