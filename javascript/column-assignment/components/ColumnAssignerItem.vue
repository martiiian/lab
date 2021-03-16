<template lang="pug">
  .assign-item(@click="$emit('click')")
    | {{ item.title }}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>

<style lang="scss" scoped>
.assign-item {
  padding: 10px 15px;
  user-select: none;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
}
</style>
