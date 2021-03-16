<template lang="pug">
  .assigner-column
    h3.title {{ title }}
    .items-wrapper
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.items-wrapper {
  border: 1px dashed;
  width: 100%;
}
.assigner-column {
  margin: 1rem;
  width: 48%;
}
</style>
