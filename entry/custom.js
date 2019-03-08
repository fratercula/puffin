/* eslint-disable */
import React, { Component } from 'react'

export default class extends Component {
  static puffinParse = false

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
