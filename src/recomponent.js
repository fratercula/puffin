import React from 'react'
import PropTypes from 'prop-types'
import component from './component'
import literal from './helper/literal'
import clone from './helper/clone'

function Recomponent(node) {
  const {
    node: Node,
    props,
    children,
  } = clone(node)
  const nodeProps = {}
  const subNode = {}

  if (!Node) {
    return children || null
  }

  Object.keys(props).forEach((key) => {
    const current = props[key]

    if (current.node) {
      nodeProps[key] = current
      delete props[key]
    }

    if (Array.isArray(current) && current[0].node) {
      nodeProps[key] = current
      delete props[key]
    }
  })

  Object.keys(nodeProps).forEach((key) => {
    const current = nodeProps[key]
    const { variable } = current

    if (Array.isArray(current)) {
      subNode[key] = current.map((item, i) => (
        <Recomponent {...item} key={i} />
      ))
      return
    }

    if (!variable) {
      subNode[key] = (<Recomponent {...current} />)
      return
    }

    const expression = `
      "use strict";

      var literal = this.literal
      var React = this.React
      var node = this.node
      var Recomponent = this.Recomponent
      var params = literal(node, { ${variable.join()} })
      return React.createElement(Recomponent, params)
    `

    subNode[key] = new Function(...variable, expression).bind({
      literal,
      React,
      node: current,
      Recomponent,
    })
  })

  // first letter lowercase, it is HTML component
  if (Node.charCodeAt(0) > 96) {
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

  // first letter uppercase, it is Antd component
  if (Node.charCodeAt(0) < 90) {
    const Component = component.get(Node)

    if (!Component) {
      return null
    }

    if (typeof children === 'undefined') {
      return (<Component {...subNode} {...props} />)
    }

    if (
      typeof children === 'string'
      || typeof children === 'boolean'
      || typeof children === 'number'
    ) {
      return (
        <Component {...subNode} {...props}>
          {children}
        </Component>
      )
    }

    if (Array.isArray(children)) {
      return (
        <Component {...subNode} {...props}>
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
