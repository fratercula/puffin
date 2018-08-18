export default {
  type: 'Card',
  props: {
    title: 'Card title',
    style: {
      marginTop: 15,
    },
  },
  children: [
    {
      type: 'Card',
      props: {
        title: 'inner title',
        type: 'inner',
      },
      children: [
        {
          type: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          text: 'Grid',
        },
        {
          type: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          text: 'Grid',
        },
        {
          type: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          text: 'Grid',
        },
        {
          type: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          text: 'Grid',
        },
        {
          type: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          text: 'Grid',
        },
      ],
    },
    {
      type: 'Card',
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
            type: 'Icon',
            props: {
              type: 'setting',
            },
          },
          {
            type: 'Icon',
            props: {
              type: 'edit',
            },
          },
          {
            type: 'Icon',
            props: {
              type: 'ellipsis',
            },
          },
        ],
      },
      children: [
        {
          type: 'Card.Meta',
          props: {
            title: 'Europe Street beat',
            description: 'description',
          },
        },
      ],
    },
  ],
}
