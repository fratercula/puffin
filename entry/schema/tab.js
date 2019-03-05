export default {
  node: 'Tabs',
  props: {
    style: {
      marginTop: 30,
    },
  },
  children: [
    {
      node: 'Tabs.TabPane',
      props: {
        tab: {
          children: 'Tab 0',
        },
      },
      children: 'Content of Tab Pane 0',
    },
    {
      node: 'Tabs.TabPane',
      props: {
        tab: {
          children: 'Tab 1',
        },
      },
      children: 'Content of Tab Pane 1',
    },
  ],
}
