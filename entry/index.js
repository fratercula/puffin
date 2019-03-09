import React from 'react'
import { render } from 'react-dom'
import * as components from 'antd'
import { C } from '../src'
import schema from './schema'
import Tabs from './tabs'
import Custom from './custom'

function Entry() {
  return (
    <C
      {...schema}
      components={{ ...components, Tabs, Custom }}
      onEvent={(...args) => window.console.log(args)}
    />
  )
}

render(<Entry />, document.getElementById('root'))
