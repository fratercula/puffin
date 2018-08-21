import React from 'react'
import clone from './clone'
import func from './func'

function Reprops(props, Recomponent) {
  const context = clone(props)

  Object.keys(context).forEach((key) => {
    const current = context[key]

    if (Array.isArray(current)) {
      context[key] = Reprops(current)
      return
    }

    if (current.node && current.variable) {
      context[key] = func({
        Recomponent,
        variable: current.variable,
        current,
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
