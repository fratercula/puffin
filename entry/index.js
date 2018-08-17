import React from 'react'
import { render } from 'react-dom'
import Puffin from '../src'

const schema = [
  {
    props: {
      span: 12,
      offset: 2,
      style: {
        border: '1px solid #eee',
        overflowY: 'auto',
        height: '100%',
      },
    },
    components: [
      {
        type: 'Table',
        props: {
          api: 'http://127.0.0.1:2333/table.json',
        },
      },

      {
        type: 'Tooltip',
        props: {
          placement: 'bottom',
          title: 'Prompt Text',
        },
        children: [
          {
            text: 'tkkkkk',
          },
        ],
      },

      {
        type: 'Timeline',
        props: {
          items: [
            {
              node: 'p',
              text: '????',
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
              text: '------',
              props: {
                dot: {
                  node: 'div',
                  text: 1,
                  props: {
                    style: {
                      borderRadius: '50%',
                      width: 30,
                      height: 30,
                      border: '1px solid #333',
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
                  type: 'Button',
                  text: 'Button',
                  props: {
                    type: 'dashed',
                  },
                },
                {
                  node: 'span',
                  text: '???',
                },
              ],
            },
          ],
          pending: 'pending',
          mode: 'alternate',
        },
      },

      {
        type: 'Card',
        props: {
          style: {
            width: 240,
          },
          cover: {
            // node: 'p',
            // text: '???',
            // props: {
            //   style: {
            //     color: 'red',
            //   },
            // },
            node: 'img',
            props: {
              src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            },
          },
        },
        children: [
          {
            type: 'Card.Meta',
            props: {
              title: 'Europe Street beat',
              description: 'description',
            },
          },
        ],
      },

      {
        type: 'Collapse',
        props: {
          defaultActiveKey: ['0', '1'],
          accordion: true,
          items: [
            {
              node: 'div',
              props: {
                header: {
                  text: 'This is panel header 1',
                },
                showArrow: false,
              },
              children: [
                {
                  node: 'p',
                  text: 'A dog is a type of domesticated animal.',
                },
              ],
            },
            {
              node: 'div',
              props: {
                header: {
                  text: 'This is panel header 1',
                },
              },
              children: [
                {
                  node: 'p',
                  text: 'A dog is a type of domesticated animal.',
                },
              ],
            },
          ],
        },
      },

      {
        type: 'Icon',
        props: {
          type: 'link',
          style: {
            marginTop: 30,
          },
        },
      },
    ],
  },
  {
    props: {
      id: 'text',
      span: 6,
      style: {
        background: '#ddd',
      },
    },
    components: [
      {
        type: 'Button',
        children: [
          {
            text: 'Button',
          },
        ],
        props: {
          type: 'danger',
        },
      },

      {
        type: 'Tabs',
        props: {
          defaultActiveKey: 1,
          tabBarExtraContent: {
            type: 'Button',
            text: 'Button',
            props: {
              type: 'dashed',
            },
          },
          items: [
            {
              node: 'div',
              props: {
                tab: {
                  node: 'button',
                  text: 'button',
                },
              },
              children: [
                {
                  text: 'aaaaaaaa',
                },
              ],
            },
            {
              node: 'div',
              props: {
                tab: {
                  node: 'button',
                  text: 'button',
                },
              },
              children: [
                {
                  text: 'bbbbbbbb',
                },
              ],
            },
          ],
        },
      },

      {
        node: 'div',
        props: {
          style: {
            background: '#fff',
          },
        },
        children: [
          {
            type: 'Timeline',
            props: {
              api: 'http://127.0.0.1:2333/timeline.json',
            },
          },
        ],
      },

      {
        type: 'Carousel',
        children: [
          {
            node: 'div',
            props: {
              style: {
                height: 160,
                background: '#364d79',
                textAlign: 'center',
                lineHeight: '160px',
              },
            },
            children: [
              {
                node: 'h3',
                children: [
                  {
                    type: 'Button',
                    props: {
                      type: 'danger',
                    },
                    text: 'span',
                  },
                  {
                    node: 'span',
                    children: [
                      {
                        node: 'em',
                        text: 'em',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            node: 'div',
            props: {
              style: {
                height: 160,
                background: '#364d79',
                textAlign: 'center',
                lineHeight: '160px',
              },
            },
            children: [
              {
                node: 'h3',
                text: 'text',
              },
            ],
          },
        ],
      },

      {
        type: 'Card',
        props: {
          title: 'Card',
        },
        children: [
          {
            type: 'Card.Grid',
            props: {
              style: {
                width: '25%',
                textAlign: 'center',
              },
            },
            text: 'Grid',
          },
          {
            type: 'Card.Grid',
            props: {
              style: {
                width: '25%',
                textAlign: 'center',
              },
            },
            text: 'Grid',
          },
          {
            type: 'Card.Grid',
            props: {
              style: {
                width: '25%',
                textAlign: 'center',
              },
            },
            text: 'Grid',
          },
          {
            type: 'Card.Grid',
            props: {
              style: {
                width: '25%',
                textAlign: 'center',
              },
            },
            text: 'Grid',
          },
          {
            type: 'Card.Grid',
            props: {
              style: {
                width: '25%',
                textAlign: 'center',
              },
            },
            text: 'Grid',
          },
        ],
      },

      {
        type: 'List',
        props: {
          grid: { gutter: 16, column: 4 },
          dataSource: [
            { title: 'content 1' },
            { title: 'content 2' },
            { title: 'content 3' },
          ],
          renderItem: {
            variable: ['item'],
            type: 'List.Item',
            children: [
              {
                type: 'Card',
                props: {
                  title: '${item.title}',
                },
                text: '${item.title}',
              },
            ],
          },
        },
      },

      {
        type: 'Card',
        props: {
          title: 'Card title',
          extra: {
            node: 'a',
            text: 'More',
            props: {
              href: '#',
            },
          },
        },
        children: [
          {
            node: 'p',
            text: 'Card content',
          },
          {
            node: 'p',
            text: 'Card content',
          },
          {
            node: 'p',
            text: 'Card content',
          },
        ],
      },

    ],
  },
]

render(<Puffin schema={schema} />, document.getElementById('root'))
