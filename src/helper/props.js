import React from 'react'
import clone from './clone'
import func from './func'

function Reprops(props, Recomponent) {
  const context = clone(props)

  if (context.node && context.variable) {
    return func({
      Recomponent,
      variable: context.variable,
      node: context,
    })
  }

  if (context.node) {
    return (<Recomponent {...context} />)
  }

  Object.keys(context).forEach((key) => {
    const current = context[key]

    if (Array.isArray(current)) {
      context[key] = current.map(item => Reprops(item, Recomponent))
      return
    }

    if (current.node && current.variable) {
      context[key] = func({
        Recomponent,
        variable: current.variable,
        node: current,
      })
      return
    }

    if (current.node) {
      context[key] = (<Recomponent {...current} />)
    }
  })

  return context
}

export default Reprops
