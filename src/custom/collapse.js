import React from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'
import Recomponent from '../recomponent'

function PuffinCollapse({ props: defaultProps, children }) {
  const {
    defaultActiveKey,
    accordion,
    ...rest
  } = defaultProps

  return (
    <Collapse
      defaultActiveKey={(defaultActiveKey || []).map(n => n.toString())}
      accordion={accordion}
      {...rest}
    >
      {
        children.map((item, i) => {
          const { props: childProps = {} } = item
          const {
            disabled,
            header,
            showArrow,
            ...childRest
          } = childProps
          const node = { ...item, props: childRest, node: 'div' }

          return (
            <Collapse.Panel
              key={i}
              showArrow={showArrow}
              disabled={disabled}
              header={(<Recomponent {...header} />)}
            >
              <Recomponent {...node} />
            </Collapse.Panel>
          )
        })
      }
    </Collapse>
  )
}

PuffinCollapse.propTypes = {
  props: PropTypes.object,
  children: PropTypes.any,
}

PuffinCollapse.defaultProps = {
  props: {},
  children: undefined,
}

export default PuffinCollapse
