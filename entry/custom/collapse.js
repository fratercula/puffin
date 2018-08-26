import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'
import { Recomponent } from '../../src'

class PuffinCollapse extends Component {
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
      accordion,
      ...rest
    } = props

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
}

PuffinCollapse.parse = false

export default PuffinCollapse