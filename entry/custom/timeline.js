import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'antd'
import { Recomponent } from '../../src'

class PuffinTimeline extends Component {
  parse = false

  static propTypes = {
    props: PropTypes.object,
    children: PropTypes.array,
  }

  static defaultProps = {
    props: {},
    children: [],
  }

  render() {
    const { props, children } = this.props
    const {
      pending,
      mode,
      ...rest
    } = props

    return (
      <Timeline {...rest} pending={pending} mode={mode}>
        {
          children.map((item, i) => {
            const { props: childProps = {} } = item
            const { dot, color, ...childRest } = childProps
            const node = { ...item, prop: childRest, node: 'div' }

            return (
              <Timeline.Item
                key={i}
                color={color}
                dot={dot ? (<Recomponent {...dot} />) : undefined}
              >
                <Recomponent {...node} />
              </Timeline.Item>
            )
          })
        }
      </Timeline>
    )
  }
}

PuffinTimeline.parse = false

export default PuffinTimeline
