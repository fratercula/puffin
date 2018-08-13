import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, message } from 'antd'
import ChildNode from './helper/childnode'
import component from './helper/component'
import Fetch from './helper/fetcher'

export default class extends Component {
  static propTypes = {
    api: PropTypes.string,
    schema: PropTypes.array,
  }

  static defaultProps = {
    api: '',
    schema: [],
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
    const { schema } = this.props

    return (
      <Row style={{ width: '100%', height: '100%' }}>
        {
          schema.map((item, i) => {
            const { components = [], props = {} } = item

            return (
              <Col key={i} {...props}>
                {
                  components.map((c, j) => (
                    <ChildNode {...c} key={j} />
                  ))
                }
              </Col>
            )
          })
        }
      </Row>
    )
  }
}
