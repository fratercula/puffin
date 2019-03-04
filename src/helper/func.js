import React from 'react'
import literal from './literal'

export default function (params) {
  const {
    node,
    C,
  } = params

  const expression = `
    "use strict";

    var literal = this.literal
    var React = this.React
    var node = this.node
    var C = this.C
    var params = literal(node, { ${node.arguments.join()} })
    return React.createElement(C, params)
  `

  const context = {
    literal,
    React,
    node,
    C,
  }

  return new Function(...node.arguments, expression).bind(context)
}
