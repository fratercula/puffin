import React from 'react'
import clone from './helper/clone'
import func from './helper/func'
import C from './component'

function p(props, unique) {
  const { onEvent, components, ...rest } = props
  const context = clone(rest)

  if (context.node && context.arguments) {
    return func({
      C,
      node: context,
      components,
      onEvent,
    })
  }

  if (context.node) {
    return (<C key={unique} {...context} components={components} onEvent={onEvent} />)
  }

  Object.keys(context).forEach((key) => {
    const current = context[key]

    if (!current) {
      return
    }

    if (Array.isArray(current)) {
      context[key] = current.map((item, i) => p({ ...item, components, onEvent }, i))
      return
    }

    if (current.node && current.arguments) {
      context[key] = func({
        C,
        node: current,
        components,
        onEvent,
      })
      return
    }

    if (current.node) {
      context[key] = (<C {...current} components={components} onEvent={onEvent} />)
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
