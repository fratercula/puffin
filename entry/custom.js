/* eslint-disable */
import React, { Component } from 'react'

export default class extends Component {
  static parse = false

  render() {
    const { children } = this.props

    return (
      <div>
        {
          children.map((item, i) => (
            <p key={i}>{item}</p>
          ))
        }
      </div>
    )
  }
}
