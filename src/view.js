import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, message } from 'antd'
import Fetch from './helper/fetcher'

const Antd = require('antd')

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
                        props,
                        text,
                      } = app
                      const App = Antd[type]

                      return (
                        <App key={j} {...props}>{text}</App>
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
