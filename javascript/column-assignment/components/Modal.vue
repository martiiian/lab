<template lang="pug">
  .modal-wrapper
    .modal
      slot
</template>

<style lang="scss" scoped>
.modal-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, .5);
}
.modal {
  width: 500px;
  border-radius: 1rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
  justify-content: center;
  align-items: flex-start;
  display: flex;
  background: white;
}
</style>