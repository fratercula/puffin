import React from 'react'
import clone from './helper/clone'
import func from './helper/func'
import Recomponent from './recomponent' // eslint-disable-line

function Reprops(props, unique) {
  const context = clone(props)

  if (context.node && context.variable) {
    return func({ Recomponent, node: context })
  }

  if (context.node) {
    return (<Recomponent key={unique} {...context} />)
  }

  Object.keys(context).forEach((key) => {
    const current = context[key]

    if (Array.isArray(current)) {
      context[key] = current.map((item, i) => Reprops(item, i))
      return
    }

    if (current.node && current.variable) {
      context[key] = func({ Recomponent, node: current })
      return
    }

    if (current.node) {
      context[key] = (<Recomponent {...current} />)
    }
  })

  return context
}

export default Reprops
