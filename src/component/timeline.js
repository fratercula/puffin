import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Timeline, Spin, Alert } from 'antd'
import ChildNode from '../helper/childnode'
import fetch from '../helper/fetcher'

export default class extends Component {
  static propTypes = {
    pending: PropTypes.string,
    mode: PropTypes.string,
    items: PropTypes.array,
    api: PropTypes.string,
  }

  static defaultProps = {
    pending: '',
    mode: '',
    items: [],
    api: '',
  }

  state = {
    pending: '', // eslint-disable-line
    mode: '', // eslint-disable-line
    items: [], // eslint-disable-line
    loading: false,
    error: '',
  }

  componentDidMount() {
    const { api: url } = this.props

    if (url) {
      this.setState({ loading: true })

      fetch({ url })
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
  }

  render() {
    const { api } = this.props
    const { loading, error } = this.state

    if (error) {
      return (
        <Alert
          message={`Component \`Timeline\`: ${error}`}
          type="error"
          showIcon
        />
      )
    }

    const {
      pending,
      mode,
      items,
    } = api ? this.state : this.props

    const Main = (
      <Timeline pending={pending} mode={mode}>
        {
          items.map((item, i) => {
            const { props = {} } = item
            const { dot, color, ...rest } = props
            const childProps = { ...item, props: rest }

            return (
              <Timeline.Item
                key={i}
                color={color}
                dot={dot ? (<ChildNode {...dot} />) : undefined}
              >
                <ChildNode {...childProps} />
              </Timeline.Item>
            )
          })
        }
      </Timeline>
    )

    if (api) {
      return (
        <Spin spinning={loading}>
          {Main}
        </Spin>
      )
    }

    return Main
  }
}
