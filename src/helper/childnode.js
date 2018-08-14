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
  const propsChild = {}
  const PropsChildNode = {}

  Object.keys(props).forEach((key) => {
    const {
      node: propsNode,
      type: propsType,
    } = props[key] // eslint-disable-line

    if (propsNode || propsType) {
      propsChild[key] = props[key]
      delete props[key]
    }
  })

  Object.keys(propsChild).forEach((key) => {
    PropsChildNode[key] = (
      <ChildNode {...propsChild[key]} />
    )
  })

  if (Node) {
    if (text) {
      return (
        <Node {...props}>{text}</Node>
      )
    }

    if (children.length) {
      return (
        <Node {...props}>
          {
            children.map((item, i) => (<ChildNode key={i} {...item} />))
          }
        </Node>
      )
    }

    return (
      <Node {...props} />
    )
  }

  if (type) {
    const Component = component(type)

    if (!Component) {
      return null
    }

    if (text) {
      return (
        <Component {...PropsChildNode} {...props}>{text}</Component>
      )
    }

    if (children.length) {
      return (
        <Component {...PropsChildNode} {...props}>
          {
            children.map((item, i) => (<ChildNode key={i} {...item} />))
          }
        </Component>
      )
    }

    return (
      <Component {...PropsChildNode} {...props} />
    )
  }

  return text || null
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
