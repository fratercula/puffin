import React from 'react'
import clone from './helper/clone'
import func from './helper/func'
import C from './component'

function Reprops(props, unique) {
  const context = clone(props)

  if (context.node && context.variable) {
    return func({ C, node: context })
  }

  if (context.node) {
    return (<C key={unique} {...context} />)
  }

  Object.keys(context).forEach((key) => {
    const current = context[key]

    if (Array.isArray(current)) {
      context[key] = current.map((item, i) => Reprops(item, i))
      return
    }

    if (current.node && current.variable) {
      context[key] = func({ C, node: current })
      return
    }

    if (current.node) {
      context[key] = (<C {...current} />)
    }
  })

  return context
}

export default Reprops
