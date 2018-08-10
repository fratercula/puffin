import React, { Component } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'
import fetch from '../helper/fetcher'

export default class extends Component {
  static propTypes = {
    api: PropTypes.string,
    columns: PropTypes.array,
    dataSource: PropTypes.array,
  }

  static defaultProps = {
    api: '',
    columns: [],
    dataSource: [],
  }

  state = {
    columns: [],
    dataSource: [],
    pagination: false,
    loading: false,
  }

  componentDidMount() {
    const { api: url } = this.props

    if (url) {
      this.setState({ loading: true })
      fetch({ url })
        .then(res => this.setState({
          loading: false,
          ...res,
        }))
    }
  }

  render() {
    const {
      api,
      columns: c,
      dataSource: d,
    } = this.props
    const { loading } = this.state
    let { columns, dataSource } = this.state

    if (!api) {
      columns = c
      dataSource = d
    }

    for (let i = 0; i < columns.length; i += 1) {
      columns[i].dataIndex = columns[i].key
    }

    for (let i = 0; i < dataSource.length; i += 1) {
      dataSource[i].key = i
    }

    return (
      <div>
        {
          api
            ? (
              <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                {...this.state}
              />
            )
            : (
              <Table
                columns={columns}
                dataSource={dataSource}
                {...this.props}
              />
            )
        }
      </div>
    )
  }
}
