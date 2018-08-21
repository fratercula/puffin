import React from 'react'
import PropTypes from 'prop-types'
import component from './component'
import clone from './helper/clone'
import Reprops from './helper/props'

function Recomponent(node) {
  const {
    node: Node,
    props: originProps,
    children,
  } = clone(node)

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
      return (<Recomponent {...children} />)
    }
  }

  // first letter uppercase, it is React component
  if (Node.charCodeAt(0) < 90) {
    const Component = component.get(Node)

    if (!Component) {
      return null
    }

    props = Reprops(originProps, Recomponent)

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
      return (<Recomponent {...children} />)
    }
  }

  return null
}

Recomponent.propTypes = {
  node: PropTypes.string,
  props: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.Array,
    PropTypes.Object,
    PropTypes.bool,
  ]),
}

Recomponent.defaultProps = {
  node: '',
  props: {},
  children: undefined,
}

export default Recomponent
