<template>
  <div>
    <h1 class="text">
      3D Hover Box
    </h1>

    <div class="text">
      userId: {{ result.userId }}
      title: {{ result.title }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  suspensible: false
}
</script>

<script setup lang="ts">
interface Item {
  userId: number
  id: number
  title: string,
  completed: boolean
}

const result: Item = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
</script>

<style lang="scss">
.text {
  position: absolute;
  font-size: 5vmin;
  text-align: center;
  transform: skew(10deg, 10deg);
  text-transform: uppercase;
  margin-top: -13vmin;
  line-height: 17vmin;
}
</style>