import * as antd from 'antd'
import components from '../component'

export default function (type) {
  const key = type.split('.')

  if (components[key[0]]) {
    if (key.length === 1) {
      return components[key[0]]
    }

    if (key.length === 2) {
      return components[key[0]][key[1]]
    }

    return components[key[0]][key[1]][key[2]]
  }

  if (antd[key[0]]) {
    if (key.length === 1) {
      return antd[key[0]]
    }

    if (key.length === 2) {
      return antd[key[0]][key[1]]
    }

    return antd[key[0]][key[1]][key[2]]
  }

  window.console.error(`Component: \`${type}\` was no found`)
  return null
}
