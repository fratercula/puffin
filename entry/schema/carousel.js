export default {
  type: 'Carousel',
  props: {
    autoplay: false,
  },
  children: [
    {
      node: 'div',
      props: {
        style: {
          background: '#364d79',
          color: '#fff',
          textAlign: 'center',
          lineHeight: '200px',
        },
      },
      children: [
        {
          node: 'div',
          children: [
            {
              type: 'Button',
              props: {
                type: 'danger',
              },
              text: 'Button',
            },
          ],
        },
      ],
    },
    {
      node: 'div',
      props: {
        style: {
          height: 200,
          background: '#364d79',
          textAlign: 'center',
          lineHeight: '200px',
        },
      },
      children: [
        {
          node: 'h3',
          text: 'text',
          props: {
            style: {
              color: '#fff',
            },
          },
        },
      ],
    },
  ],
}
