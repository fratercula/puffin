import React from 'react'
import PropTypes from 'prop-types'
import { Tabs as T } from 'antd'
import { C } from '../src'

function Tabs({ props, children }) {
  const {
    tabBarExtraContent, // eslint-disable-line
    ...rest
  } = props

  return (
    <T
      tabBarExtraContent={(<C {...tabBarExtraContent} />)}
      {...rest}
    >
      {
        children.map((item, i) => {
          const { props: childProps = {} } = item
          const { disabled, tab, ...childRest } = childProps
          const node = { ...item, node: 'div', props: childRest }

          return (
            <T.TabPane
              key={i}
              disabled={disabled}
              tab={(<C {...tab} />)}
            >
              <C {...node} />
            </T.TabPane>
          )
        })
      }
    </T>
  )
}

Tabs.propTypes = {
  props: PropTypes.object,
  children: PropTypes.array,
}

Tabs.defaultProps = {
  props: {},
  children: [],
}

Tabs.puffinParse = false

export default Tabs
