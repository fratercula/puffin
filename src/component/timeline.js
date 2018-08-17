import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'antd'
import ChildNode from '../helper/childnode'

function PuffinTimeline({ pending, mode, items }) {
  return (
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
