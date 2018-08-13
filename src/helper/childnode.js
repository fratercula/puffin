import React from 'react'
import PropTypes from 'prop-types'
import component from './component'

function ChildNode(node) {
  const {
    node: Node,
    text,
    type,
    props,
    children,
  } = node

  if (Node) {
    if (text) {
      return (
        <Node {...props}>{text}</Node>
      )
    }
    return (
      <Node {...props}>
        {
          children.map((item, i) => (<ChildNode key={i} {...item} />))
        }
      </Node>
    )
  }

  if (type) {
    const Component = component(type)

    if (!Component) {
      return null
    }

    if (text) {
      return (
        <Component {...props}>{text}</Component>
      )
    }

    return (
      <Component {...props}>
        {
          children.map((item, i) => (<ChildNode key={i} {...item} />))
        }
      </Component>
    )
  }

  return text
}

ChildNode.propTypes = {
  node: PropTypes.string,
  text: PropTypes.any,
  type: PropTypes.string,
  props: PropTypes.object,
  children: PropTypes.array,
}

ChildNode.defaultProps = {
  node: '',
  text: '',
  type: '',
  props: {},
  children: [],
}

export default ChildNode
