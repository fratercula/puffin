export default {
  node: 'div',
  children: [
    {
      type: 'Alert',
      props: {
        type: 'warning',
        message: 'You can not change the table `Page`, because of the JSON data is specific',
      },
    },
    {
      type: 'Table',
      props: {
        api: './mock/table.json',
      },
    },
  ],
}
