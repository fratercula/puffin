import React, { Component } from 'react'
import { render } from 'react-dom'
import * as antd from 'antd'
import * as material from '@material-ui/core'
import puffin, { Recomponent } from '../src'
import Editor from './editor'
import clone from '../src/helper/clone'
import antdSchema from './schema'
import materialSchema from './schema/material-ui'
import style from './index.less'
import {
  TableAPI,
  Tabs,
  Timeline,
  Collapse,
} from './custom'

function getSchema(type) {
  return clone(type === 'antd' ? antdSchema : materialSchema)
}

class Entry extends Component {
  type = 'antd'

  state = {
    schema: getSchema('antd'),
  }

  componentWillMount() {
    this.setComponents('antd')
  }

  onClick = (type) => {
    this.setComponents(type)
    this.setState({ schema: getSchema(type) })
  }

  onChange = (schema) => {
    this.setState({ schema })
  }

  onReset = () => {
    this.setState({ schema: getSchema(this.type) })
  }

  setComponents(type) {
    this.type = type

    if (type === 'antd') {
      puffin.library(antd)
      puffin.register('TableAPI', TableAPI)
      puffin.register('Tabs', Tabs)
      puffin.register('Timeline', Timeline)
      puffin.register('Collapse', Collapse)
    } else {
      puffin.library(material)
    }
  }

  on = (type, params) => {
    const schema = getSchema(this.type)

    if (type === 'afterChange') {
      schema.children[0].children[0].props.message = `You click the ${params[0] === 0 ? 'first' : 'second'} page`
      this.setState({ schema })
    }
  }

  render() {
    const { schema } = this.state

    return (
      <div className={style.main}>
        <div className={style.control}>
          <antd.Button.Group>
            <antd.Button onClick={() => this.onClick('material')}>
              Material UI
            </antd.Button>
            <antd.Button onClick={() => this.onClick('antd')}>
              Antd
            </antd.Button>
          </antd.Button.Group>
          <Editor value={schema} onChange={this.onChange} onReset={this.onReset} />
        </div>
        <div className={style.component}>
          <Recomponent on={this.on} {...schema} />
        </div>
      </div>
    )
  }
}

render(<Entry />, document.getElementById('root'))
