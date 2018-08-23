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

  return new Function(...keys, `return \`${literals}\``)(...values)
}

export default function (node, variable) {
  return JSON.parse(tplls(JSON.stringify(node), variable))
}