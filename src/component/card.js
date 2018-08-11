import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  Row,
  Col,
  Icon,
} from 'antd'

export default class extends Component {
  static propTypes = {
    header: PropTypes.object,
    collapsible: PropTypes.bool,
    style: PropTypes.object,
    body: PropTypes.object,
  }

  static defaultProps = {
    header: {
      title: '',
      icon: '#666',
      style: {},
    },
    body: {
      cells: [],
      style: {},
    },
    collapsible: false,
    style: {},
  }

  state = {
    active: '',
  }

  onClick = () => {
    const { active } = this.state
    this.setState({ active: active ? '' : 'active' })
  }

  render() {
    const { active } = this.state
    const {
      header: {
        title,
        icon: iconColor,
        style: headerStyle,
      },
      body: {
        cells,
        style: boxStyle,
      },
      collapsible,
      style,
    } = this.props
    const iconStyle = { color: iconColor || '#666' }

    if (headerStyle.fontSize) {
      iconStyle.fontSize = headerStyle.fontSize + 2
    }

    let header = (
      <div style={headerStyle} className="puffin-card-header">
        <h3 className="puffin-card-header-title">{title}</h3>
      </div>
    )

    if (collapsible) {
      header = (
        <div
          style={headerStyle}
          className={`puffin-card-header ${active ? '' : 'inactive'}`}
        >
          <h3 className="puffin-card-header-title">{title}</h3>
          {
            active
              ? (
                <Icon
                  style={iconStyle}
                  className="puffin-card-header-icon"
                  onClick={this.onClick}
                  type="down"
                />
              )
              : (
                <Icon
                  style={iconStyle}
                  className="puffin-card-header-icon"
                  onClick={this.onClick}
                  type="up"
                />
              )
          }
        </div>
      )
    }

    return (
      <Collapse
        bordered={false}
        activeKey={!collapsible ? 'active' : active}
      >
        <Collapse.Panel
          showArrow={false}
          header={header}
          key="active"
          style={style}
          className="puffin-card"
        >
          <Row style={boxStyle} className="puffin-card-box">
            {
              cells.map((cell, i) => {
                const {
                  text,
                  color,
                  fontSize,
                } = cell.label
                const labelStyle = { color, fontSize }

                return (
                  <Col
                    span={cell.span}
                    offset={cell.offset}
                    key={i}
                  >
                    <div className="puffin-card-cell">
                      <div
                        style={labelStyle}
                        className="puffin-card-cell-label"
                      >
                        {text}
                      </div>
                      <div className="puffin-card-cell-value">
                        {cell.value}
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Collapse.Panel>
      </Collapse>
    )
  }
}
