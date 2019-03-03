import React, { Component } from 'react'
import { render } from 'react-dom'
import * as antd from 'antd'
import puffin, { Recomponent } from '../src'
import schema from './schema'
import { Tabs } from './custom'

class Entry extends Component {
  state = {
    schema,
  }

  componentWillMount() {
    puffin.library(antd)
    puffin.register('Tabs', Tabs)
  }

  on = (type, params) => {
    if (type === 'afterChange') {
      schema.children[0].children[0].props.message = `You click the ${params[0] === 0 ? 'first' : 'second'} page`
      this.setState({ schema })
    }
  }

  render() {
    const { schema } = this.state

    return (
      <Recomponent on={this.on} {...schema} />
    )
  }
}

render(<Entry />, document.getElementById('root'))
