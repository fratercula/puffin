import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { Recomponent } from '../src'

export default class extends Component {
  static propTypes = {
    api: PropTypes.string.isRequired,
  }

  state = {
    props: {},
  }

  onClick = () => {
    const { api } = this.props
    window.fetch(api)
      .then(res => res.json())
      .then(props => this.setState({ props }))
  }

  render() {
    const { props } = this.state

    if (!Object.keys(props).length) {
      return (
        <Button type="primary" onClick={this.onClick}>Fetch Data</Button>
      )
    }

    return (<Recomponent node="Table" props={props} />)
  }
}
