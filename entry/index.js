import React, { Component } from 'react'
import { render } from 'react-dom'
import * as antd from 'antd'
import puffin, { Recomponent } from '../src'
import Editor from './editor'
import clone from '../src/helper/clone'
import schemaData from './schema'
import style from './index.less'
import {
  TableAPI,
  Tabs,
  Timeline,
  Collapse,
} from './custom'

puffin.library(antd)
puffin.register('TableAPI', TableAPI)
puffin.register('Tabs', Tabs)
puffin.register('Timeline', Timeline)
puffin.register('Collapse', Collapse)

class Entry extends Component {
  state = {
    schema: clone(schemaData),
  }

  render() {
    const { schema } = this.state

    return (
      <div className={style.main}>
        <div className={style.control}>
          <Editor
            value={schema}
            onChange={v => this.setState({ schema: v })}
            onReset={() => this.setState({ schema: clone(schemaData) })}
          />
        </div>
        <div className={style.component}>
          <Recomponent {...schema} />
        </div>
      </div>
    )
  }
}

render(<Entry />, document.getElementById('root'))
