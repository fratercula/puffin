import React from 'react'
import { render } from 'react-dom'
import * as components from 'antd'
import { C } from '../src'
import schema from './schema'

function Entry() {
  return <C {...schema} components={components} />
}

render(<Entry />, document.getElementById('root'))
