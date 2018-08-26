import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import { Recomponent } from '../../src'

class PuffinTabs extends Component {
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
      defaultActiveKey,
      tabBarExtraContent,
      ...rest
    } = props

    return (
      <Tabs
        defaultActiveKey={defaultActiveKey.toString()}
        tabBarExtraContent={(<Recomponent {...tabBarExtraContent} />)}
        {...rest}
      >
        {
          children.map((item, i) => {
            const { props: childProps = {} } = item
            const { disabled, tab, ...childRest } = childProps
            const node = { ...item, node: 'div', props: childRest }

            return (
              <Tabs.TabPane
                key={i}
                disabled={disabled}
                tab={(<Recomponent {...tab} />)}
              >
                <Recomponent {...node} />
              </Tabs.TabPane>
            )
          })
        }
      </Tabs>
    )
  }
}

PuffinTabs.parse = false

export default PuffinTabs
