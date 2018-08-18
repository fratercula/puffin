export default {
  type: 'Tabs',
  props: {
    style: {
      background: '#fff',
    },
    defaultActiveKey: 1,
    tabBarExtraContent: {
      type: 'Tooltip',
      props: {
        title: 'Prompt Text',
      },
      children: [
        {
          type: 'Button',
          text: 'Button',
        },
      ],
    },
    items: [
      {
        node: 'div',
        props: {
          tab: {
            text: 'Tab 1',
          },
          style: {
            padding: 10,
          },
        },
        children: [
          {
            node: 'p',
            text: 'Content of Tab Pane 0',
          },
          {
            node: 'p',
            text: 'Content of Tab Pane 0',
          },
          {
            node: 'p',
            text: 'Content of Tab Pane 0',
          },
        ],
      },
      {
        node: 'div',
        props: {
          tab: {
            text: 'Tab 2',
          },
          style: {
            padding: 10,
          },
        },
        children: [
          {
            node: 'p',
            text: 'Content of Tab Pane ',
          },
          {
            node: 'p',
            text: 'Content of Tab Pane 1',
          },
          {
            node: 'p',
            text: 'Content of Tab Pane 0',
          },
        ],
      },
    ],
  },
}
