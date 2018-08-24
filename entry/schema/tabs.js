export default {
  node: 'Tabs',
  props: {
    style: {
      marginTop: 15,
    },
    type: 'card',
    defaultActiveKey: 1,
    tabBarExtraContent: {
      node: 'Tooltip',
      props: {
        title: 'Prompt Text',
      },
      children: [
        {
          node: 'Button',
          children: 'Button',
        },
      ],
    },
  },
  children: [
    {
      node: 'Tabs.TabPane',
      props: {
        tab: {
          children: 'Tab 1',
        },
        style: {
          padding: 10,
        },
      },
      children: [
        {
          node: 'p',
          children: 'Content of Tab Pane 0',
        },
        {
          node: 'p',
          children: 'Content of Tab Pane 1',
        },
        {
          node: 'p',
          children: 'Content of Tab Pane 2',
        },
      ],
    },
    {
      node: 'Tabs.TabPane',
      props: {
        tab: {
          children: 'Tab 2',
        },
        style: {
          padding: 10,
        },
      },
      children: [
        {
          node: 'p',
          children: 'Content of Tab Pane ',
        },
        {
          node: 'p',
          children: 'Content of Tab Pane 1',
        },
        {
          node: 'p',
          children: 'Content of Tab Pane 0',
        },
      ],
    },
  ],
}
