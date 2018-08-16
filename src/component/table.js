import React, { Component } from 'react'
import { Table, Alert } from 'antd'
import PropTypes from 'prop-types'
import ChildNode from '../helper/childnode'
import fetch from '../helper/fetcher'
import textParser from '../helper/textParser'

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
    const { api } = this.props
    const { loading, error } = this.state
    const {
      columns,
      dataSource,
    } = api ? this.state : this.props

    if (error) {
      return (
        <Alert
          message={`Component \`Table\`: ${error}`}
          type="error"
          showIcon
        />
      )
    }

    for (let i = 0; i < columns.length; i += 1) {
      columns[i].dataIndex = columns[i].key

      const { render } = columns[i]
      if (render) {
        columns[i].render = (text, record, index) => {
          const rest = textParser(render, { text, record, index })
          return (
            <ChildNode {...rest} />
          )
        }
      }
    }

    for (let i = 0; i < dataSource.length; i += 1) {
      dataSource[i].key = i
    }

    if (api) {
      return (
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          onChange={this.onChange}
          {...this.state}
        />
      )
    }

    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={this.onChange}
        {...this.props}
      />
    )
  }
}
