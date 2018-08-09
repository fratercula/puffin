import React, { Component } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    scroll: PropTypes.object,
    pagination: PropTypes.object,
    size: PropTypes.string,
  }

  static defaultProps = {
    scroll: {},
    pagination: {},
    size: 'default',
    columns: [
      {
        title: 'Full Name',
        width: 100,
        key: 'name',
      },
      {
        title: 'Age',
        width: 100,
        key: 'age',
      },
      {
        title: 'address',
        key: 'address',
      },
    ],
    data: [
      {
        name: 'Edrward 0',
        age: 32,
        address: 'London Park no. 0',
      },
      {
        name: 'Edrward 1',
        age: 32,
        address: 'London Park no. 1',
      },
      {
        name: 'Edrward 2',
        age: 32,
        address: 'London Park no. 2',
      },
      {
        name: 'Edrward 3',
        age: 32,
        address: 'London Park no. 3',
      },
    ],
  }

  state = {
    page: 1,
  }

  render() {
    const {
      columns,
      data,
      scroll,
      pagination,
      size,
    } = this.props

    for (let i = 0; i < columns.length; i += 1) {
      columns[i].dataIndex = columns[i].key
    }

    for (let i = 0; i < data.length; i += 1) {
      data[i].key = i
    }

    return (
      <Table
        columns={columns}
        dataSource={data}
        scroll={scroll}
        pagination={pagination}
        size={size}
        {...this.props}
      />
    )
  }
}
