import React from 'react'
import PropTypes from 'prop-types'
import clone from './helper/clone'
import p from './props'

function C(params) {
  const { onEvent, components, ...rest } = params
  const { node, props, children } = clone(rest)

  let properties = {}
  let Node = node

  if (!Node) {
    return children || null
  }

  // first letter lowercase, it is HTML tag
  if (Node.charCodeAt(0) > 96) {
    Object.keys(props).forEach((key) => {
      if (typeof props[key] !== 'object' || key === 'style') {
        properties[key] = props[key]
      }
    })

    if (typeof children === 'undefined') {
      return (<Node {...properties} />)
    }

    if (
      typeof children === 'string'
      || typeof children === 'boolean'
      || typeof children === 'number'
    ) {
      return (<Node {...properties}>{children}</Node>)
    }

    if (Array.isArray(children)) {
      return (
        <Node {...properties}>
          {
            children.map((item, i) => (
              <C key={i} {...item} components={components} onEvent={onEvent} />
            ))
          }
        </Node>
      )
    }

    if (typeof children === 'object') {
      return (
        <Node {...properties}>
          <C {...children} components={components} onEvent={onEvent} />
        </Node>
      )
    }
  }

  // first letter uppercase, it is React component
  if (Node.charCodeAt(0) < 90) {
    const keys = Node.split('.').map(s => `['${s}']`).join('')

    try {
      Node = eval(`components${keys}`)
    } catch (e) {
      window.console.error(`Component '${node}' not exist`)
    }

    if (!Node) {
      window.console.error(`Component '${node}' not exist`)
      return null
    }

    if (Node.puffinParse === false) {
      return (<Node {...clone(params)} />)
    }

    properties = p({ ...props, onEvent, components })

    if (typeof children === 'undefined') {
      return (<Node {...properties} />)
    }

    if (
      typeof children === 'string'
      || typeof children === 'boolean'
      || typeof children === 'number'
    ) {
      return (<Node {...properties}>{children}</Node>)
    }

    if (Array.isArray(children)) {
      return (
        <Node {...properties}>
          {
            children.map((item, i) => (
              <C key={i} {...item} components={components} onEvent={onEvent} />
            ))
          }
        </Node>
      )
    }

    if (typeof children === 'object') {
      return (
        <Node {...properties}>
          <C {...children} components={components} onEvent={onEvent} />
        </Node>
      )
    }
  }

  return children || null
}

C.propTypes = {
  node: PropTypes.string,
  props: PropTypes.object,
  components: PropTypes.object,
  onEvent: PropTypes.func,
  children: PropTypes.any,
}

C.defaultProps = {
  node: '',
  props: {},
  components: {},
  onEvent: () => null,
}

export default C
