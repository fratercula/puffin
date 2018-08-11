import React, { Component } from 'react'
// import Table from './component/table'
import Card from './component/card'

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
  box: {
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

// <Table api="http://127.0.0.1:2333/table.json" />

export default class extends Component {
  state = {
    title: 'Puffin',
  }

  render() {
    const { title } = this.state

    return (
      <div>
        <h3>
          {title}
        </h3>
        <Card {...cardData} />
      </div>
    )
  }
}
