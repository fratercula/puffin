export default {
  node: 'Carousel',
  props: {
    autoplay: true,
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
              node: 'Button',
              props: {
                type: 'danger',
              },
              children: 'React Button',
            },
          ],
        },
        {
          node: 'img',
          props: {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            width: 200,
            height: 'auto',
            style: {
              position: 'absolute',
              top: 0,
            },
          },
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
      children: {
        node: 'h3',
        children: 'HTML text',
        props: {
          style: {
            color: '#fff',
          },
        },
      },
    },
  ],
}
