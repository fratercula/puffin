import React from 'react'

const Antd = require('antd')

function ChildNode(node) {
  const {
    node: Node,
    text,
    type,
    child = [],
  } = node

  if (Node) {
    if (text) {
      return (
        <Node>{text}</Node>
      )
    }
    return (
      <Node>
        {
          child.map((item, i) => (<ChildNode key={i} {...item} />))
        }
      </Node>
    )
  }

  if (type) {
    const App = Antd[type]
    if (text) {
      return (
        <App>{text}</App>
      )
    }
    return (
      <App>
        {
          child.map((item, i) => (<ChildNode key={i} {...item} />))
        }
      </App>
    )
  }

  return text
}

export default ChildNode
