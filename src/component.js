class Component {
  constructor() {
    this.custom = {}
    this.builtin = {}
  }

  register(type, component) {
    if (this.custom[type]) {
      window.console.error(`Component: \`${type}\` exists`)
      return
    }
    this.custom[type] = component
  }

  set library(components) {
    this.builtin = components
    this.custom = {}
  }

  get(type) {
    const { custom, builtin } = this
    const key = type.split('.')

    if (custom[key[0]]) {
      if (key.length === 1) {
        return custom[key[0]]
      }

      if (key.length === 2) {
        return custom[key[0]][key[1]]
      }

      return custom[key[0]][key[1]][key[2]]
    }

    if (builtin[key[0]]) {
      if (key.length === 1) {
        return builtin[key[0]]
      }

      if (key.length === 2) {
        return builtin[key[0]][key[1]]
      }

      return builtin[key[0]][key[1]][key[2]]
    }

    window.console.error(`Component: \`${type}\` was no found`)
    return null
  }
}

export default new Component()
