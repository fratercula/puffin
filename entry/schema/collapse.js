export default {
  node: 'Collapse',
  props: {
    style: {
      marginTop: 10,
    },
    defaultActiveKey: [0, 2],
    accordion: false,
  },
  children: [
    {
      node: 'Collapse.Panel',
      props: {
        header: {
          children: 'This is panel header 1',
        },
        showArrow: false,
      },
      children: [
        {
          node: 'p',
          children: 'A dog is a type of domesticated animal.',
        },
        {
          node: 'Avatar',
          props: {
            src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          },
        },
      ],
    },
    {
      node: 'Collapse.Panel',
      props: {
        header: {
          children: 'This is panel header 2',
        },
        disabled: true,
      },
    },
    {
      node: 'Collapse.Panel',
      props: {
        header: {
          children: 'This is panel header 1',
        },
      },
      children: [
        {
          node: 'p',
          children: 'A dog is a type of domesticated animal.',
        },
        {
          node: 'Badge',
          props: {
            count: 1,
          },
          children: {
            node: 'Avatar',
            props: {
              shape: 'square',
              icon: 'user',
            },
          },
        },
      ],
    },
  ],
}
