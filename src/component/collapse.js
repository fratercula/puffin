import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd'
import ChildNode from '../helper/childnode'

export default class extends Component {
  state = {
    loading: false,
  }

  render() {
    const {
      defaultActiveKey,
      accordion,
      items = [],
    } = this.props

    return (
      <Collapse
        defaultActiveKey={defaultActiveKey}
        accordion={accordion}
      >
        {
          items.map((item, i) => {
            const { props = {} } = item
            const {
              disabled,
              key,
              header,
              ...rest
            } = props
            const childProps = { ...item, props: rest }

            return (
              <Collapse.Panel
                key={i}
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
}
