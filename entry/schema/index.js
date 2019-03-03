import carousel from './carousel'
import tabs from './tabs'

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
        tabs,
      ],
    },
  ],
}
