import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from 'jsoneditor-for-react'
import { Drawer, Button } from 'antd'
import style from './index.less'

export default class extends Component {
  static propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    onReset: PropTypes.func,
  }

  static defaultProps = {
    value: [],
    onChange: () => null,
    onReset: () => null,
  }

  state = {
    visible: false,
  }

  render() {
    const {
      value: values,
      onChange,
      onReset,
      ...rest
    } = this.props
    const { visible } = this.state

    return (
      <div {...rest}>
        <Button
          type="primary"
          onClick={() => this.setState({ visible: true })}
        >
          JSON schema
        </Button>
        <Drawer
          title={(
            <div className={style.title}>
              <div>JSON schema</div>
              <Button onClick={onReset} type="danger">Reset</Button>
            </div>
          )}
          placement="right"
          width="40%"
          onClose={() => this.setState({ visible: false })}
          visible={visible}
        >
          <Editor values={values} onChange={onChange} />
        </Drawer>
      </div>
    )
  }
}
