<template>
  <div>
    <button @click="generateError"> generate error</button>
    <UIButton @click="removeFromArr">
      My global component
    </UIButton>
    <span v-for="el in myReactiveArray">{{ el }}</span>
    <span v-for="el in myReactiveArrayCopy">{{ el }}</span>

    <div>counter: {{ counter.count }}</div>
  </div>
</template>

<script setup>
import {nextTick, onUpdated, reactive} from 'vue'

const generateError = () => {
  throw new Error('Biba')
}

const myReactiveArray = reactive([1, 2, 3])
const myReactiveArrayCopy = reactive(myReactiveArray)
const counter = reactive({count: 0})

let n = counter.count
n++

const removeFromArr = () => {
  myReactiveArray.splice(0, 1)
  nextTick(() => {
    console.log('select next tick')
  })
}

onUpdated(() => {
  // eslint-disable-next-line no-console
  console.log('child updated')
})
</script>
