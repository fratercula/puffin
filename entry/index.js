import React from 'react'
import { render } from 'react-dom'
import Puffin from '../src'

const schema = [
  {
    props: {
      span: 12,
      offset: 2,
      style: {
        border: '1px solid #eee',
        overflowY: 'auto',
        height: '100%',
      },
    },
    components: [
      {
        type: 'Table',
        props: {
          api: 'http://127.0.0.1:2333/table.json',
        },
      },
    ],
  },
  {
    props: {
      span: 6,
    },
    components: [
    ],
  },
]

render(<Puffin schema={schema} />, document.getElementById('root'))
