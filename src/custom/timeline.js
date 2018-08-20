import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'antd'
import Recomponent from '../recomponent'

function PuffinTimeline({
  pending,
  mode,
  items,
  ...otherProps
}) {
  return (
    <Timeline {...otherProps} pending={pending} mode={mode}>
      {
        items.map((item, i) => {
          const { props = {} } = item
          const { dot, color, ...rest } = props
          const childProps = {
            ...item,
            props: rest,
            node: 'div',
          }

          return (
            <Timeline.Item
              key={i}
              color={color}
              dot={dot ? (<Recomponent {...dot} />) : undefined}
            >
              <Recomponent {...childProps} />
            </Timeline.Item>
          )
        })
      }
    </Timeline>
  )
}

PuffinTimeline.propTypes = {
  pending: PropTypes.string,
  mode: PropTypes.string,
  items: PropTypes.array,
}

PuffinTimeline.defaultProps = {
  pending: '',
  mode: '',
  items: [],
}

export default PuffinTimeline
