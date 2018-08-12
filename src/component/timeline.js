import React from 'react'
import PropTypes from 'prop-types'
import { Timeline, Icon } from 'antd'
import ChildNode from '../helper/childnode'

function PuffinTimeLine(params) {
  const {
    pending,
    mode,
    items,
  } = params

  return (
    <Timeline pending={pending} mode={mode}>
      {
        items.map((item, i) => {
          const { props = {} } = item
          const { dot, color } = props

          return (
            <Timeline.Item
              key={i}
              color={color}
              dot={dot ? (<Icon type={dot} />) : undefined}
            >
              <ChildNode {...item} />
            </Timeline.Item>
          )
        })
      }
    </Timeline>
  )
}

PuffinTimeLine.propTypes = {
  pending: PropTypes.string,
  mode: PropTypes.string,
  items: PropTypes.array,
}

PuffinTimeLine.defaultProps = {
  pending: '',
  mode: '',
  items: [],
}

export default PuffinTimeLine
