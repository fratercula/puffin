import React from 'react'
import clone from './helper/clone'
import func from './helper/func'
import C from './component'

function p(props, unique) {
  const { onEvent, ...rest } = props
  const context = clone(rest)

  if (context.node && context.arguments) {
    return func({ C, node: context })
  }

  if (context.node) {
    return (<C key={unique} {...context} />)
  }

  Object.keys(context).forEach((key) => {
    const current = context[key]

    if (Array.isArray(current)) {
      context[key] = current.map((item, i) => p(item, i))
      return
    }

    if (current.node && current.arguments) {
      context[key] = func({ C, node: current })
      return
    }

    if (current.node) {
      context[key] = (<C {...current} />)
      return
    }

    if (typeof current === 'string' && current.match(/^:.{1,}/)) {
      const expression = `this.onEvent('${current.split(':')[1]}', arguments)`
      context[key] = new Function(expression).bind({ onEvent })
    }
  })

  return context
}

export default p
