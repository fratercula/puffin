import React from 'react'
import PropTypes from 'prop-types'
import Apps from '../component'

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
    const App = Apps[type]

    if (text) {
      return (
        <App {...props}>{text}</App>
      )
    }
    return (
      <App {...props}>
        {
          children.map((item, i) => (<ChildNode key={i} {...item} />))
        }
      </App>
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
