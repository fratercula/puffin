import React, { Component } from 'react'
import { Table, Alert } from 'antd'
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
    error: '',
  }

  componentDidMount() {
    const { api: url } = this.props

    if (url) {
      this.fetch({ url })
    }
  }

  onChange = ({ current }, filters, { field, order }) => {
    const { pagination: prev } = this.state
    const { api: url } = this.props
    const pagination = { ...prev, current }

    if (!url) {
      return
    }

    this.setState({ pagination })
    this.fetch({
      url,
      data: {
        page: current,
        filters: JSON.stringify(filters),
        sorter: JSON.stringify({ field, order }),
      },
    })
  }

  fetch = (params) => {
    this.setState({ loading: true })
    fetch(params)
      .then(({ c, m, d }) => {
        if (c !== 0) {
          this.setState({
            error: m || 'Fetch Error',
            loading: false,
          })
          return
        }
        this.setState({
          loading: false,
          ...d,
        })
      })
      .catch(err => this.setState({
        error: err.message || 'Fetch Error',
        loading: false,
      }))
  }

  render() {
    const {
      api,
      columns: c,
      dataSource: d,
    } = this.props
    const { loading, error } = this.state
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
          error ? <Alert message={error} type="error" showIcon /> : null
        }
        {
          api
            ? (
              <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                onChange={this.onChange}
                {...this.state}
              />
            )
            : (
              <Table
                columns={columns}
                dataSource={dataSource}
                onChange={this.onChange}
                {...this.props}
              />
            )
        }
      </div>
    )
  }
}
