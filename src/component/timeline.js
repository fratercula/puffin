import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'antd'
import ChildNode from '../helper/childnode'

function PuffinTimeLine({ pending, mode, items }) {
  return (
    <Timeline pending={pending} mode={mode}>
      {
        items.map((item, i) => {
          const { props = {} } = item
          const { dot, color } = props

          delete props.color
          delete props.dot

          return (
            <Timeline.Item
              key={i}
              color={color}
              dot={dot ? (<ChildNode {...dot} />) : undefined}
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
