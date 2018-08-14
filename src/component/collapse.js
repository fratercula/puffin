import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse, Spin, Alert } from 'antd'
import ChildNode from '../helper/childnode'
import fetch from '../helper/fetcher'

export default class extends Component {
  static propTypes = {
    api: PropTypes.string,
    defaultActiveKey: PropTypes.array,
    accordion: PropTypes.bool,
    items: PropTypes.array,
  }

  static defaultProps = {
    api: '',
    defaultActiveKey: [0],
    accordion: false,
    items: [],
  }

  state = {
    loading: false,
    error: '',
    defaultActiveKey: [0], // eslint-disable-line
    accordion: false, // eslint-disable-line
    items: [], // eslint-disable-line
  }

  componentDidMount() {
    const { api: url } = this.props
    if (url) {
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
          message={`Component \`Collapse\`: ${error}`}
          type="error"
          showIcon
        />
      )
    }

    const {
      defaultActiveKey,
      accordion,
      items = [],
    } = api ? this.state : this.props

    const Main = (
      <Collapse
        defaultActiveKey={defaultActiveKey.map(n => n.toString())}
        accordion={accordion}
      >
        {
          items.map((item, i) => {
            const { props = {} } = item
            const {
              disabled,
              header,
              showArrow,
              ...rest
            } = props
            const childProps = { ...item, props: rest }

            return (
              <Collapse.Panel
                key={i}
                showArrow={showArrow}
                disabled={disabled}
                header={(<ChildNode {...header} />)}
              >
                <ChildNode {...childProps} />
              </Collapse.Panel>
            )
          })
        }
      </Collapse>
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
