import React, { Component } from 'react'
// import Table from './component/table'
// import Card from './component/card'
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
    span: 10,
    offset: 2,
    style: {
      border: '1px solid #eee',
    },
    apps: [
      {
        type: 'Icon',
        style: {
          marginTop: 30,
        },
        props: {
          type: 'link',
        },
      },
      {
        type: 'Timeline',
        props: {
          pending: 'Pending',
          mode: 'alternate',
          items: [
            {
              text: 'Solve initial network problems 2015-09-01',
            },
            {
              node: 'div',
              text: 'line1',
              props: {
                dot: 'up-circle',
              },
            },
            {
              node: 'div',
              children: [
                {
                  node: 'span',
                  text: 'span',
                  props: {
                    style: {
                      color: 'red',
                    },
                  },
                },
                {
                  type: 'Button',
                  text: 'Button',
                  props: {
                    type: 'danger',
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    span: 6,
    style: {
      background: '#ddd',
    },
    apps: [
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
        <View data={viewData} />
      </div>
    )
  }
}
