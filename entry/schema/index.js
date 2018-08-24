import card from './card'
import carousel from './carousel'
import collapse from './collapse'
import list from './list'
import table from './table'
import tabs from './tabs'
import timeline from './timeline'
import tableAPI from './table-api'

export default [
  {
    props: {
      span: 14,
      style: {
        borderRight: '1px solid #eee',
        overflowY: 'auto',
        padding: 15,
        height: '100%',
      },
    },
    components: [
      tableAPI,
      carousel,
      list,
      card,
    ],
  },
  {
    props: {
      span: 10,
      style: {
        overflowY: 'auto',
        padding: 15,
        height: '100%',
      },
    },
    components: [
      timeline,
      tabs,
      collapse,
      table,
    ],
  },
]
