import React, { Component } from 'react'
import { render } from 'react-dom'
import { Button } from 'antd'
import Editor from './editor'
import Puffin from '../src'
import clone from '../src/helper/clone'
import schemaData from './schema'
import style from './index.less'

class Entry extends Component {
  state = {
    useApi: false,
    schema: clone(schemaData),
  }

  render() {
    const { useApi, schema } = this.state

    return (
      <div className={style.main}>
        <div className={style.control}>
          <Button.Group>
            <Button
              onClick={() => this.setState({ useApi: true })}
            >
              Use API
            </Button>
            <Button
              onClick={() => this.setState({ useApi: false })}
            >
              Use Props
            </Button>
          </Button.Group>
          <Editor
            style={{ visibility: useApi ? 'hidden' : 'visible' }}
            value={schema}
            onChange={v => this.setState({ schema: v })}
            onReset={() => this.setState({ schema: clone(schemaData) })}
          />
        </div>
        <div className={style.component}>
          {
            useApi ? <Puffin api="./mock/api.json" /> : <Puffin schema={schema} />
          }
        </div>
      </div>
    )
  }
}

render(<Entry />, document.getElementById('root'))
