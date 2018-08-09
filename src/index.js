import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from './component/table'

export default class extends Component {
  static propTypes = {
    label: PropTypes.string,
  }

  static defaultProps = {
    label: 'Button',
  }

  state = {
    type: 'primary',
  }

  render() {
    const { label } = this.props
    return (
      <div>
        <Table bordered />
      </div>
    )
  }
}
