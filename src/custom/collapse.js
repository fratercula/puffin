import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'
import Recomponent from '../recomponent'

function PuffinCollapse({
  defaultActiveKey,
  accordion,
  items,
  ...otherProps
}) {
  return (
    <Collapse
      defaultActiveKey={defaultActiveKey.map(n => n.toString())}
      accordion={accordion}
      {...otherProps}
    >
      {
        items.map((item, i) => {
          const { props = {} } = item
          const {
            disabled,
            header,
            showArrow,
            ...rest
          } = props
          const childProps = {
            ...item,
            props: rest,
            node: 'div',
          }

          return (
            <Collapse.Panel
              key={i}
              showArrow={showArrow}
              disabled={disabled}
              header={(<Recomponent {...header} />)}
            >
              <Recomponent {...childProps} />
            </Collapse.Panel>
          )
        })
      }
    </Collapse>
  )
}

PuffinCollapse.propTypes = {
  defaultActiveKey: PropTypes.array,
  accordion: PropTypes.bool,
  items: PropTypes.array,
}

PuffinCollapse.defaultProps = {
  defaultActiveKey: [0],
  accordion: false,
  items: [],
}

export default PuffinCollapse
