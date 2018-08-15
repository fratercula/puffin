import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Spin, Alert } from 'antd'
import ChildNode from '../helper/childnode'
import fetch from '../helper/fetcher'

export default class extends Component {
  static propTypes = {
    api: PropTypes.string,
    defaultActiveKey: PropTypes.number,
    tabBarExtraContent: PropTypes.object,
    items: PropTypes.array,
  }

  static defaultProps = {
    api: '',
    defaultActiveKey: 0,
    tabBarExtraContent: {},
    items: [],
  }

  state = {
    loading: false,
    error: '',
    defaultActiveKey: 0, // eslint-disable-line
    tabBarExtraContent: {}, // eslint-disable-line
    items: [], // eslint-disable-line
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
          message={`Component \`Tabs\`: ${error}`}
          type="error"
          showIcon
        />
      )
    }

    const {
      defaultActiveKey,
      tabBarExtraContent,
      items,
      ...rest
    } = api ? this.state : this.props

    const Main = (
      <Tabs
        defaultActiveKey={defaultActiveKey.toString()}
        tabBarExtraContent={(<ChildNode {...tabBarExtraContent} />)}
        {...rest}
      >
        {
          items.map((item, i) => {
            const { props = {} } = item
            const {
              disabled,
              tab,
              ...childRest
            } = props
            const childProps = { ...item, props: childRest }

            return (
              <Tabs.TabPane
                key={i}
                disabled={disabled}
                tab={(<ChildNode {...tab} />)}
              >
                <ChildNode {...childProps} />
              </Tabs.TabPane>
            )
          })
        }
      </Tabs>
    )

    if (api) {
      return (
        <Spin spinning={loading}>
          {loading ? null : Main}
        </Spin>
      )
    }

    return Main
  }
}
