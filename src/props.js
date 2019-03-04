import React from 'react'
import clone from './helper/clone'
import func from './helper/func'
import C from './component'

function p(props, unique) {
  const { onChange, ...rest } = props
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

    if (current.function) {
      const expression = `this.onChange('${current.function}', arguments)`
      context[key] = new Function(expression).bind({ onChange })
    }
  })

  return context
}

export default p
