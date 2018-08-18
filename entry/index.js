import React from 'react'
import { render } from 'react-dom'
import Puffin from '../src'
import schema from './schema'

render(<Puffin schema={schema} />, document.getElementById('root'))
