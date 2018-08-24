export default {
  node: 'Timeline',
  props: {
    style: {
      marginTop: 80,
    },
    pending: 'pending',
    mode: 'alternate',
  },
  children: [
    {
      node: 'Timeline.Item',
      children: 'Create a services site 2015-09-01',
      props: {
        dot: {
          node: 'Icon',
          props: {
            type: 'link',
          },
        },
      },
    },
    {
      node: 'Timeline.Item',
      children: 'Solve initial network problems 2015-09-01',
      props: {
        dot: {
          node: 'div',
          children: 2,
          props: {
            style: {
              fontSize: 11,
              textAlign: 'center',
              borderRadius: '50%',
              width: 20,
              height: 20,
              lineHeight: '18px',
              border: '1px solid #666',
            },
          },
        },
      },
    },
    {
      node: 'Timeline.Item',
      props: {
        color: 'red',
      },
      children: [
        {
          node: 'p',
          children: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        },
        {
          type: 'Button',
          children: 'Button',
          props: {
            type: 'dashed',
          },
        },
      ],
    },
  ],
}
