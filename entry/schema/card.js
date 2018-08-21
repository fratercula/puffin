export default {
  node: 'Card',
  props: {
    title: 'Card title',
    style: {
      marginTop: 15,
    },
  },
  children: [
    {
      node: 'Card',
      props: {
        title: 'inner title',
        type: 'inner',
      },
      children: [
        {
          node: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          children: 'Grid',
        },
        {
          node: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          children: 'Grid',
        },
        {
          node: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          children: 'Grid',
        },
        {
          node: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          children: 'Grid',
        },
        {
          node: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          children: 'Grid',
        },
      ],
    },
    {
      node: 'Card',
      props: {
        style: {
          marginTop: 16,
          width: 240,
        },
        type: 'inner',
        title: 'inner title',
        cover: {
          node: 'img',
          props: {
            src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          },
        },
        actions: [
          {
            node: 'Icon',
            props: {
              type: 'setting',
            },
          },
          {
            node: 'Icon',
            props: {
              type: 'edit',
            },
          },
          {
            node: 'Icon',
            props: {
              type: 'ellipsis',
            },
          },
        ],
      },
      children: [
        {
          node: 'Card.Meta',
          props: {
            title: 'Europe Street beat',
            description: 'description',
          },
        },
      ],
    },
  ],
}
