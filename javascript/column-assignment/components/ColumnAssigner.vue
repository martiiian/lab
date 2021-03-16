<template lang="pug">
  .column-assigner
    h3.column-assigner__title Intent
    .column-assigner__columns
      ColumnAssignerColumn(
        v-for="(column, columnIndex) in columns"
        :title="column.name"
        :key="columnIndex"
      )
        ColumnAssignerItem(
          v-for="(item, itemIndex) in column.items"
          @click="moveToAnotherSide(columnIndex, itemIndex)"
          :key="item.id"
          :item="item"
        )
</template>

<script>
import ColumnAssignerColumn from './ColumnAssignerColumn'
import ColumnAssignerItem from './ColumnAssignerItem'

export default {
  components: {ColumnAssignerItem, ColumnAssignerColumn},
  data() {
    return {
      columns: [
        {
          name: 'Column',
          items: [
            {
              id: 1,
              title: 'item1'
            },
            {
              id: 2,
              title: 'item2'
            },
          ]
        },
        {
          name: 'Column2',
          items: [
            {
              id: 3,
              title: 'item3'
            },
            {
              id: 4,
              title: 'item4'
            },
          ]
        },
      ]
    }
  },
  methods: {
    moveToAnotherSide(columnIndex, itemIndex) {
      const toColumnIndex = columnIndex + 1 === this.columns.length
          ? columnIndex - 1
          : columnIndex + 1

      // remove
      const item = this.columns[columnIndex].items.splice(itemIndex, 1)[0]

      this.columns[toColumnIndex].items.push(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.column-assigner {
  display: flex;
  padding: 1rem;
  flex-direction: column;
  width: 100%;
  &__title {}
  &__columns {
    display: flex;
  }
}
.column {
  padding: .1rem;
  display: flex;
  flex-direction: column;
}
.assign-item {}
</style>
