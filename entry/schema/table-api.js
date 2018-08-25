export default {
  node: 'div',
  props: {
    style: {
      marginBottom: 10,
      padding: 10,
      background: '#eee',
    },
  },
  children: [
    {
      node: 'Alert',
      props: {
        style: {
          marginBottom: 10,
        },
        type: 'info',
        message: 'A custom table component, table data from API',
      },
    },
    {
      node: 'TableAPI',
      props: {
        api: './schema/table.json',
      },
    },
  ],
}
