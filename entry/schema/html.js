export default {
  node: 'p',
  props: {
    ignore: ['this should be ignored'],
    also: { be: 'ignore' },
    style: {
      color: 'grey',
    },
  },
  children: [
    {
      node: 'span',
      children: 'span',
    },
    {
      node: 'a',
      props: {
        href: '#',
        style: { marginLeft: 10 },
      },
      children: {
        node: 'span',
        children: 'a',
      },
    },
  ],
}
