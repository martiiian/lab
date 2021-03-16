<template lang="pug">
  .biba Hello nigga
    VueDraggable.column(
      v-model="listOne"
      @start="startHandler"
      @end="endHandler"
      @change="changeHandler"
      @dragstart="dragStart"
      @dragend="dragStart"
    )
      .drag-element(v-for="item in listOne")
        | {{ item }}
    VueDraggable.column(
      v-model="listTwo"
      @start="startHandler"
      @end="endHandler"
      @change="changeHandler"
      @dragstart="dragStart"
      @dragend="dragStart"
    )
      .drag-element(v-for="item in listTwo")
        | {{ item }}
</template>

<script>
import VueDraggable from 'vuedraggable'

export default {
  data() {
    return {
      listOne: [
          'name1',
          'name2',
          'name3'
      ],
      listTwo: [
          'name4'
      ],
    }
  },
  components: {
    VueDraggable
  },
  methods: {
    dragStart(e) {
      console.log('drag start end', e)
    },
    changeHandler(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
    startHandler(e) {
      console.log(e)
    },
    endHandler(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.biba {
  display: flex;
}
.drag-element {
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid black;
  display: inline-flex;
  cursor: pointer;
  margin: 0.5rem;
}
.column {
  padding: 2rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px dashed;
}
</style>
