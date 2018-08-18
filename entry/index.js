import React, { Component } from 'react'
import { render } from 'react-dom'
import { Button } from 'antd'
import Editor from './editor'
import Puffin from '../src'
import schemaData from './schema'
import '../src/index.less'
import './index.less'

class Main extends Component {
  state = {
    useApi: false,
    schema: JSON.parse(JSON.stringify(schemaData)),
  }

  render() {
    const { useApi, schema } = this.state

    return (
      <div className="main">
        <div className="control">
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
            onReset={() => this.setState({ schema: JSON.parse(JSON.stringify(schemaData)) })}
          />
        </div>
        <div className="component">
          {
            useApi ? <Puffin api="/mock/api.json" /> : <Puffin schema={schema} />
          }
        </div>
      </div>
    )
  }
}

render(<Main />, document.getElementById('root'))
