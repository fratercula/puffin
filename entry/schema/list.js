export default {
  type: 'List',
  props: {
    style: {
      marginTop: 15,
    },
    bordered: true,
    itemLayout: 'horizontal',
    dataSource: [
      { title: 'Ant Design Title 1' },
      { title: 'Ant Design Title 2' },
      { title: 'Ant Design Title 3' },
      { title: 'Ant Design Title 4' },
    ],
    renderItem: {
      variable: ['item'],
      type: 'List.Item',
      children: [
        {
          type: 'List.Item.Meta',
          props: {
            avatar: {
              type: 'Avatar',
              props: {
                src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              },
            },
            title: {
              node: 'a',
              props: {
                href: 'https://ant.design',
              },
              text: '${item.title}',
            },
            description: 'Ant Design, a design language for background applications',
          },
        },
      ],
    },
  },
}
