export default {
  node: 'Carousel',
  props: {
    autoplay: false,
    afterChange: ':afterChange',
  },
  children: [
    {
      node: 'div',
      props: {
        style: {
          height: 200,
          background: '#364d79',
          color: '#fff',
          fontSize: 30,
          textAlign: 'center',
          lineHeight: '200px',
        },
      },
      children: '0',
    },
    {
      node: 'div',
      props: {
        style: {
          height: 200,
          color: '#fff',
          fontSize: 30,
          background: '#364d79',
          textAlign: 'center',
          lineHeight: '200px',
        },
      },
      children: '1',
    },
  ],
}
