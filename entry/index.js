import React, { Component } from 'react'
import { render } from 'react-dom'
import Editor from './editor'
import Puffin from '../src'
import clone from '../src/helper/clone'
import schemaData from './schema'
import style from './index.less'

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
          <Puffin className={style.puffin} schema={schema} />
        </div>
      </div>
    )
  }
}

render(<Entry />, document.getElementById('root'))
