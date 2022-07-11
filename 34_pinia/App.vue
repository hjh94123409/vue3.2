<template>
    <div>
      pinia: {{Test.user}} --- {{Test.name}}
      <hr>
      <button @click="change">change</button>
      <!-- <hr>
      解构：{{current}} --- {{name}} -->
      <hr>
      getters: {{Test.newName}}
      <hr>
      <button @click="reset">reset</button>
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from "./store";
import { storeToRefs } from 'pinia'

const Test = useTestStore()

const change = () => {
  //1
  // Test.current++
  //2
  // Test.$patch({
  //   current: 888,
  //   name: '哈哈'
  // })
  //3  常用
  // Test.$patch((state) => {
  //   state.current = 999
  //   state.name = '嘿嘿'
  // })
  //4  缺点就是把原对象覆盖，必须一次把所有值都修改， 不常用
  // Test.$state = {
  //   current: 2000,
  //   name: '哈哈'
  // }
  //5
  // Test.setCurrent(567)
  // console.log(current, name)
  // Test.current++
  // current.value++
  Test.setUser()
}

const reset = () => {
  Test.$reset()
}

//
Test.$subscribe((args, state) => {
  console.log('++++++',args)
  console.log('++++++',state)
}, {
  detached: false,
  deep: true,
  flush: 'post'
})

//
Test.$onAction((args) => {
  args.after(() => {
    console.log('after')
  })
  console.log('----',args)
}, false)

</script>

<style lang="less" scoped></style>
