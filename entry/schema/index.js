import card from './card'
import carousel from './carousel'
import collapse from './collapse'
import list from './list'
import table from './table'
import tabs from './tabs'
import timeline from './timeline'
import tableAPI from './table-api'

export default {
  node: 'Row',
  props: {
    style: {
      width: '100%',
      height: '100%',
    },
  },
  children: [
    {
      node: 'Col',
      props: {
        span: 14,
        style: {
          borderRight: '1px solid #eee',
          overflowY: 'auto',
          padding: 15,
          height: '100%',
        },
      },
      children: [
        {
          node: 'Alert',
          props: {
            style: {
              marginBottom: 10,
            },
            type: 'info',
            message: 'Change this text by click the Carousel component below',
          },
        },
        carousel,
        tableAPI,
        list,
        card,
      ],
    },
    {
      node: 'Col',
      props: {
        span: 10,
        style: {
          overflowY: 'auto',
          padding: 15,
          height: '100%',
        },
      },
      children: [
        timeline,
        tabs,
        collapse,
        table,
      ],
    },
  ],
}
