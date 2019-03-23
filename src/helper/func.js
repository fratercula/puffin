import React from 'react'
import literal from './literal'

export default function (params) {
  const {
    node,
    C,
    components,
    onEvent,
  } = params

  const expression = `
    "use strict";

    const { literal, React, node, C, onEvent, components } = this
    const params = literal(node, { ${node.arguments.join()} })
    return React.createElement(C, { ...params, components, onEvent })
  `

  const context = {
    literal,
    React,
    node,
    components,
    onEvent,
    C,
  }

  return new Function(...node.arguments, expression).bind(context)
}
