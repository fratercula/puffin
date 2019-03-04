import html from './html'
import table from './table'
import carousel from './carousel'

export default {
  node: 'Row',
  children: [
    {
      node: 'Col',
      props: {
        span: 14,
        style: {
          borderRight: '1px solid #eee',
          padding: 15,
        },
      },
      children: [
        html,
        carousel,
      ],
    },
    {
      node: 'Col',
      props: {
        span: 10,
        style: {
          padding: 15,
        },
      },
      children: [
        table,
      ],
    },
  ],
}
