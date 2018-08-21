import React from 'react'
import literal from './literal'

export default function (params) {
  const {
    node,
    Recomponent,
    variable,
  } = params

  const expression = `
    "use strict";

    var literal = this.literal
    var React = this.React
    var node = this.node
    var Recomponent = this.Recomponent
    var params = literal(node, { ${variable.join()} })
    return React.createElement(Recomponent, params)
  `

  const context = {
    literal,
    React,
    node,
    Recomponent,
  }

  return new Function(...variable, expression).bind(context)
}
