import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export default class extends Component {
  state = {
    type: 'primary'
  }

  render() {
    return (
      <Button {...this.state}>Button</Button>
    )
  }
}
