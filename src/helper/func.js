import React from 'react'
import literal from './literal'

export default function (params) {
  const {
    node,
    Recomponent,
  } = params

  const expression = `
    "use strict";

    var literal = this.literal
    var React = this.React
    var node = this.node
    var Recomponent = this.Recomponent
    var params = literal(node, { ${node.variable.join()} })
    return React.createElement(Recomponent, params)
  `

  const context = {
    literal,
    React,
    node,
    Recomponent,
  }

  return new Function(...node.variable, expression).bind(context)
}
