export function tplls(literals, variable) {
  const keys = []
  const values = []

  Object.keys(variable).forEach((k) => {
    keys.push(k)
    values.push(variable[k])
  })

  if (!keys.length || !literals) {
    return literals
  }

  // eslint-disable-next-line
  return new Function(...keys, 'return `' + literals + '`')(...values)
}

export default function textParser(node, variable) {
  let { text, children = [] } = node

  text = tplls(text, variable)

  if (children.length) {
    children = children.map(item => textParser(item, variable))
  }

  return {
    ...node,
    text,
    children,
  }
}
