<template>
  <div class="app">
    <JqxPivotGrid
      v-bind="getProps()"
    />
  </div>
</template>

<script>
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.bootstrap.css';
import JqxPivotGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpivotgrid'


export default {
  components: {
    JqxPivotGrid
  },

  data() {
    return {
    }
  },

  methods: {
    getProps() {
      const { jqx } = window;

      const source = {
        datatype: "array",
        datafields: [
          {name: 'all', type: 'number'},
          {name: 'article', type: 'number'},
          {name: 'micro', type: 'number'},
          {name: 'plot', type: 'number'},
          {name: 'hronotype', type: 'number'},
          {name: 'count', type: 'string'},
          {name: 'value', type: 'string'},
          {name: 'nob', type: 'string'},
          {name: 'redaction', type: 'string'},
          {name: 'responsible', type: 'string'},
          {name: 'status', type: 'string'},
        ],
        localdata: [
          {
            all: 0,
            article: 2,
            micro: 0,
            plot: 2,
            hronotype: '3',
            value: 'Количество',
            nob: 'НОБ Наука 1',
            redaction: 'Редакция математических наук',
            responsible: 'Петров Оркин',
            status: '0'
          },
          {
            all: 2,
            article: 4,
            micro: 1,
            plot: 3,
            hronotype: '2',
            value: 'Количество',
            nob: 'НОБ Наука 1',
            redaction: 'Редакция математических наук',
            responsible: 'Петров Оркин',
            status: '0'
          },
          {
            all: 0,
            article: 2,
            micro: 0,
            plot: 2,
            hronotype: 3,
            value: 'Объем',
            nob: 'НОБ Наука 1',
            redaction: 'Редакция математических наук',
            responsible: 'Петров Оркин',
            status: '0'
          },
          {
            all: 3,
            article: 1,
            micro: 7,
            plot: 2,
            hronotype: 3,
            value: 'Объем',
            nob: 'НОБ Наука 1',
            redaction: 'Редакция математических наук',
            responsible: 'Петров Оркин',
            status: '0'
          },
          {
            all: 0,
            article: 2,
            micro: 3,
            plot: 2,
            hronotype: 1,
            value: 'Объем',
            nob: 'НОБ Наука 1',
            redaction: 'Редакция астрономии',
            responsible: 'Пушнила Бабукай',
            status: '0'
          },
          {
            all: 0,
            article: 2,
            micro: 3,
            plot: 2,
            hronotype: 1,
            value: 'Количество',
            nob: 'НОБ Наука 1',
            redaction: 'Редакция астрономии',
            responsible: 'Пушнила Бабукай',
            status: '0'
          },
        ]
      }

      const dataAdapter = new jqx.dataAdapter(source)
      dataAdapter.dataBind()

      const pivotDataSource = new jqx.pivot(
        dataAdapter,
        {
          pivotValuesOnRows: false,
          columns: [
            {
              dataField: 'value'
            },
          ],
          localization: {
            subtotalstring: "Всего по подразделению"
          },
          values: [
            { dataField: 'all', text: 'Всего', function: 'sum' },
            { dataField: 'article', text: 'Статья', function: 'sum' },
            { dataField: 'micro', text: 'Микропонятие', function: 'sum' },
            { dataField: 'plot', text: 'Сюжет', function: 'sum' },
            { dataField: 'hronotype', text: 'Хронотип', function: 'sum' },
          ],
          rows: [
            {
              text: 'Ноб ответственного',
              dataField: 'nob',
              width: 400
            },
            {
              text: 'Редакция ответственного',
              dataField: 'redaction',
              width: 400,
              className: 'rowStyle'
            },
            {
              text: 'Ответственный за задачу',
              dataField: 'responsible',
              className: 'rowStyle',
              width: 400
            },
            {
              text: 'Статус',
              dataField: 'status',
              className: 'rowStyle',
              width: 400
            }
          ],
          totals: {
            columns: {
              grandtotals: false,
              subtotals: false
            },
            rows: {
              grandtotals: false,
              subtotals: true
            }
          }
        }
      )

      const style = "width: 100%; height: 700px"

      return {
        source: pivotDataSource,
        style,
        treeStyleRows: false,
        autoResize: false,
        multipleSelectionEnabled: true
      }
    }
  }
}
</script>

<style>
.rowStyle {
  width: 400px;
}
</style>
