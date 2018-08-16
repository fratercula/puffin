import React, { Component } from 'react'
import View from './view'

const cardData = {
  collapsible: false,
  header: {
    title: 'Card Title',
    icon: '',
    style: {
      padding: '10px 12px',
      fontSize: 13,
    },
  },
  style: {
    borderRadius: 3,
  },
  body: {
    style: {
      padding: '10px 12px',
    },
    cells: [
      {
        label: {
          text: 'User Name :',
          color: '#56a8a7',
          fontSize: 15,
        },
        value: 'new town',
        span: 8,
        offset: 8,
      },
      {
        label: {
          text: 'User Number :',
        },
        value: '9817817812',
        span: 8,
      },
      {
        label: {},
        value: '',
        span: 24,
      },
      {
        label: {
          text: 'User Number2 :',
        },
        value: '曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口',
        span: 8,
      },
      {
        label: {
          text: 'User Name :',
        },
        value: 'new town',
        span: 8,
        offset: 4,
      },
    ],
  },
}

const viewData = [
  {
    props: {
      span: 12,
      offset: 2,
      style: {
        border: '1px solid #eee',
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
          // accordion: true,
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
        type: 'Collapse',
        props: {
          api: 'http://127.0.0.1:2333/collapse.json',
        },
      },
      {
        type: 'Tabs',
        props: {
          api: 'http://127.0.0.1:2333/tabs.json',
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
                background: '#fff',
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

// <Table api="http://127.0.0.1:2333/table.json" />
// <Card {...cardData} />

export default class extends Component {
  state = {
    title: 'Puffin',
  }

  render() {
    const { title } = this.state

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <View schema={viewData} />
      </div>
    )
  }
}
