<template>
  <div ref="dropZoneRef" :class="['drop-field', {'drop-field_over-zone': isOverDropZone}]">
    Drop files here
  </div>
</template>

<script setup lang="ts">
import {useDropZone} from '@vueuse/core'
import {ref} from "vue";

const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  // eslint-disable-next-line no-console
  console.log(files)
  // called when files are dropped on zone
}

const {isOverDropZone} = useDropZone(dropZoneRef, onDrop)
</script>

<style lang="scss">
.drop-field {
  padding: 20px;
  
  &_over-zone {
    background: lightgray;
  }
}
</style>

