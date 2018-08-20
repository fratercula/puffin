import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import ChildNode from '../helper/childnode'

function PuffinTabs({
  defaultActiveKey,
  tabBarExtraContent,
  items,
  ...rest
}) {
  return (
    <Tabs
      defaultActiveKey={defaultActiveKey.toString()}
      tabBarExtraContent={tabBarExtraContent}
      {...rest}
    >
      {
        items.map((item, i) => {
          const { props = {} } = item
          const {
            disabled,
            tab,
            ...childRest
          } = props
          const childProps = {
            ...item,
            node: 'div',
            props: childRest,
          }

          return (
            <Tabs.TabPane
              key={i}
              disabled={disabled}
              tab={(<ChildNode {...tab} />)}
            >
              <ChildNode {...childProps} />
            </Tabs.TabPane>
          )
        })
      }
    </Tabs>
  )
}

PuffinTabs.propTypes = {
  defaultActiveKey: PropTypes.number,
  tabBarExtraContent: PropTypes.object,
  items: PropTypes.array,
}

PuffinTabs.defaultProps = {
  defaultActiveKey: 0,
  tabBarExtraContent: {},
  items: [],
}

export default PuffinTabs
