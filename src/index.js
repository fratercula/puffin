import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Icon,
  Spin,
  message,
} from 'antd'
import ChildNode from './helper/childnode'
import fetch from './helper/fetcher'

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
    loading: true,
    error: false,
    schema: [], // eslint-disable-line
  }

  componentDidMount() {
    const { api: url } = this.props

    if (!url) {
      this.setState({ loading: false })
      return
    }

    fetch({ url })
      .then(({ c, m, d: schema }) => {
        if (c !== 0) {
          return this.onError(m || 'Fetch Error')
        }
        // eslint-disable-next-line
        return this.setState({ loading: false, schema })
      })
      .catch(err => this.onError(err.message || 'Fetch Error'))
  }

  onError = (error) => {
    this.setState({ error: true, loading: false })
    message.error(error, 10)
  }

  render() {
    const { loading, error } = this.state
    const { api } = this.props
    const { schema } = api ? this.state : this.props

    if (loading) {
      return (
        <Spin
          style={{ margin: 20 }}
          indicator={<Icon type="loading" spin />}
        />
      )
    }

    if (error) {
      return (
        null
      )
    }

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
