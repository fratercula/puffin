import React, { Component } from 'react'
import Table from './component/table'

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
        <Table api="http://127.0.0.1:2333/table.json" />
      </div>
    )
  }
}
