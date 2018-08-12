import React from 'react'
import PropTypes from 'prop-types'
import components from '../component'

const antd = require('antd')

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
    const key = type.split('.')

    let Component

    if (components[key[0]]) {
      Component = key.length === 1 ? components[key[0]] : components[key[0]][key[1]]
    } else if (antd[key[0]]) {
      Component = key.length === 1 ? antd[key[0]] : antd[key[0]][key[1]]
    }

    if (!Component) {
      window.console.error(`Component: ${type} was no found`)
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
  text: PropTypes.string,
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
