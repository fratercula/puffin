import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'
import ChildNode from '../helper/childnode'

function PuffinCollapse({ defaultActiveKey, accordion, items }) {
  return (
    <Collapse
      defaultActiveKey={defaultActiveKey.map(n => n.toString())}
      accordion={accordion}
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
          const childProps = { ...item, props: rest }

          return (
            <Collapse.Panel
              key={i}
              showArrow={showArrow}
              disabled={disabled}
              header={(<ChildNode {...header} />)}
            >
              <ChildNode {...childProps} />
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
