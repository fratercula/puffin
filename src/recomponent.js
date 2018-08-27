import React from 'react'
import PropTypes from 'prop-types'
import component from './component'
import clone from './helper/clone'
import Reprops from './reprops' // eslint-disable-line

function Recomponent(params) {
  const {
    node: Node,
    props: originProps,
    children,
  } = clone(params)

  let props = {}

  if (!Node) {
    return children || null
  }

  // first letter lowercase, it is HTML component
  if (Node.charCodeAt(0) > 96) {
    Object.keys(originProps).forEach((key) => {
      const current = originProps[key]
      if (!Array.isArray(current)) {
        props[key] = current
      }
    })

    if (typeof children === 'undefined') {
      return (<Node {...props} />)
    }

    if (
      typeof children === 'string'
      || typeof children === 'boolean'
      || typeof children === 'number'
    ) {
      return (<Node {...props}>{children}</Node>)
    }

    if (Array.isArray(children)) {
      return (
        <Node {...props}>
          {
            children.map((item, i) => (
              <Recomponent key={i} {...item} />
            ))
          }
        </Node>
      )
    }

    if (typeof children === 'object') {
      return (
        <Node {...props}>
          <Recomponent {...children} />
        </Node>
      )
    }
  }

  // first letter uppercase, it is React component
  if (Node.charCodeAt(0) < 90) {
    const Component = component.get(Node)

    if (!Component) {
      return null
    }

    if (Component.parse === false) {
      return (<Component {...clone(params)} />)
    }

    props = Reprops(originProps)

    if (typeof children === 'undefined') {
      return (<Component {...props} />)
    }

    if (
      typeof children === 'string'
      || typeof children === 'boolean'
      || typeof children === 'number'
    ) {
      return (<Component {...props}>{children}</Component>)
    }

    if (Array.isArray(children)) {
      return (
        <Component {...props}>
          {
            children.map((item, i) => (
              <Recomponent key={i} {...item} />
            ))
          }
        </Component>
      )
    }

    if (typeof children === 'object') {
      return (
        <Component {...props}>
          <Recomponent {...children} />
        </Component>
      )
    }
  }

  return children || null
}

Recomponent.propTypes = {
  node: PropTypes.string,
  props: PropTypes.object,
  children: PropTypes.any,
}

Recomponent.defaultProps = {
  node: '',
  props: {},
  children: undefined,
}

export default Recomponent
