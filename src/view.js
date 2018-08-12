import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, message } from 'antd'
import ChildNode from './helper/childnode'
import Apps from './component'
import Fetch from './helper/fetcher'

export default class extends Component {
  static propTypes = {
    api: PropTypes.string,
    data: PropTypes.array,
  }

  static defaultProps = {
    api: '',
    data: [],
  }

  state = {
    loading: false,
    error: '',
  }

  componentDidMount() {
    const { api: url } = this.props
    if (url) {
      this.setState({ loading: true })
    }
  }

  render() {
    const { loading } = this.state
    const { data } = this.props

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Row style={{ width: '100%', height: '100%' }}>
          {
            data.map((item, i) => {
              const {
                span,
                offset,
                style,
                apps = [],
              } = item

              return (
                <Col
                  key={i}
                  span={span}
                  offset={offset}
                  style={style}
                >
                  {
                    apps.map((app, j) => {
                      const {
                        type,
                        props = {},
                        children = [],
                        style: appStyle,
                      } = app
                      const App = Apps[type]

                      return (
                        <div key={j} style={appStyle}>
                          {
                            children.length
                              ? (
                                <App {...props}>
                                  {
                                    children.map((ch, l) => (<ChildNode key={l} {...ch} />))
                                  }
                                </App>
                              )
                              : (<App {...props} />)
                          }
                        </div>
                      )
                    })
                  }
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}
