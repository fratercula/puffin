export default {
  type: 'Collapse',
  props: {
    defaultActiveKey: [0, 2],
    accordion: false,
    items: [
      {
        node: 'div',
        props: {
          header: {
            text: 'This is panel header 1',
          },
          showArrow: false,
        },
        children: [
          {
            node: 'p',
            text: 'A dog is a type of domesticated animal.',
          },
          {
            type: 'Avatar',
            props: {
              src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            },
          },
        ],
      },
      {
        node: 'div',
        props: {
          header: {
            text: 'This is panel header 2',
          },
          disabled: true,
        },
      },
      {
        node: 'div',
        props: {
          header: {
            text: 'This is panel header 1',
          },
        },
        children: [
          {
            node: 'p',
            text: 'A dog is a type of domesticated animal.',
          },
          {
            type: 'Badge',
            props: {
              count: 1,
            },
            children: [
              {
                type: 'Avatar',
                props: {
                  shape: 'square',
                  icon: 'user',
                },
              },
            ],
          },
        ],
      },
    ],
  },
}
