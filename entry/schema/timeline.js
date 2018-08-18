export default {
  type: 'Timeline',
  props: {
    items: [
      {
        node: 'p',
        text: 'Create a services site 2015-09-01',
        props: {
          dot: {
            type: 'Icon',
            props: {
              type: 'link',
            },
          },
        },
      },
      {
        node: 'div',
        text: 'Solve initial network problems 2015-09-01',
        props: {
          dot: {
            node: 'div',
            text: 2,
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
        node: 'div',
        props: {
          color: 'red',
        },
        children: [
          {
            node: 'p',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          },
          {
            type: 'Button',
            text: 'Button',
            props: {
              type: 'dashed',
            },
          },
        ],
      },
    ],
    pending: 'pending',
    mode: 'alternate',
  },
}
