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
import clone from './helper/clone'
import style from './index.less'

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
    error: false,
    schema: [], // eslint-disable-line
  }

  componentDidMount() {
    this.fetch(this.props.api)
  }

  componentWillReceiveProps({ api }) {
    this.fetch(api)
  }

  onError = (error) => {
    this.setState({ error: true, loading: false })
    message.error(error, 10)
  }

  fetch = (url) => {
    if (!url) {
      return
    }

    this.setState({ loading: true })

    fetch({ url })
      .then(({ c, m, d: schema }) => {
        if (c !== 0) {
          this.onError(m || 'Fetch Error')
          return
        }
        setTimeout(() => {
          // eslint-disable-next-line
          this.setState({ loading: false, schema })
        }, 1000)
      })
      .catch(err => this.onError(err.message || 'Fetch Error'))
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
      <Row className={style.puffin}>
        {
          clone(schema).map((item, i) => {
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
