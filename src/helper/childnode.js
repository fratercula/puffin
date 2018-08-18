import React from 'react'
import PropTypes from 'prop-types'
import component from './component'
import textParser from './textParser'

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

  /* eslint-disable react/destructuring-assignment */
  Object.keys(props).forEach((key) => {
    const current = props[key]
    const {
      node: propsNode,
      type: propsType,
    } = current

    if (propsNode || propsType) {
      propsChild[key] = current
      delete props[key]
    }

    if (Array.isArray(current)) {
      const {
        node: propsArrayNode,
        type: propsArrayType,
      } = current[0]

      if (propsArrayNode || propsArrayType) {
        propsChild[key] = current
        delete props[key]
      }
    }
  })

  Object.keys(propsChild).forEach((key) => {
    const current = propsChild[key]
    const { variable } = current

    if (Array.isArray(current)) {
      PropsChildNode[key] = current.map((item, i) => (
        <ChildNode {...item} key={i} />
      ))
      return
    }

    if (!variable) {
      PropsChildNode[key] = (
        <ChildNode {...current} />
      )
      return
    }

    const fn = `
      var textParser = this.textParser
      var React = this.React
      var node = this.node
      var ChildNode = this.ChildNode
      var rest = textParser(node, { ${variable.join()} })
      return React.createElement(ChildNode, rest)
    `

    PropsChildNode[key] = new Function(...variable, fn).bind({
      textParser,
      React,
      node: current,
      ChildNode,
    })
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
