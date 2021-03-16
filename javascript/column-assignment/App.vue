<template lang="pug">
  .main
    Modal
      ColumnAssigner
</template>

<script>
import ColumnAssigner from './components/ColumnAssigner'
import Modal from './components/Modal'

export default {
  components: {Modal, ColumnAssigner }
}
</script>

<style lang="scss" scoped>
.main {
  background: url("./assets/bg.png") no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
