# Puffin

JSON Schema describes web component

> Example

**given**

```json
{
  "node": "div",
  "props": {
    "style": {
      "color": "red"
    }
  },
  "children": [
    {
      "node": "p",
      "children": {
        "node": "span",
        "children": "Text"
      }
    }
  ]
}
```

**out**

```html
<div style="color: red">
  <p><span>Text</span></p>
</div>
```

## Install

```bash
$ npm i @fratercula/puffin
```

## Usage

**simple**

```js
import React from 'react'
import { render } from 'react-dom'
import { C } from '@fratercula/puffin'

const schema = {
  "node": "p",
  "children": [
    {
      "node": "span",
      "children": "span"
    }
  ]
}

render((
  <C {...schema} />
), document.getElementById('root'))
```

**use components**

```js
import React from 'react'
import { render } from 'react-dom'
import { C } from '@fratercula/puffin'
import * as antd from 'antd'

const schema = {
  "node": "Carousel", // antd Carousel
  "props": {
    "autoplay": true
  },
  "children": [
    {
      "node": "div",
      "children": 1
    },
    {
      "node": "div",
      "children": 2
    }
  ]
}

render((
  <C {...schema} components={antd} />
), document.getElementById('root'))
```

**function callback**

```js
import React from 'react'
import { render } from 'react-dom'
import { C } from '@fratercula/puffin'
import * as antd from 'antd'

const schema = {
  "node": "Carousel", // antd Carousel
  "props": {
    "afterChange": {
      "function": 'afterChange',
    },
  },
  "children": [
    {
      "node": "div",
      "children": 2
    }
  ]
}

render((
  <C
    {...schema}
    components={antd}
    onChange={(key, args) => {
      console.log(key, args)
    }}
  />
), document.getElementById('root'))
```

### Schmea

```js
{
  /*
    first letter lowercase, it is HTML tag
    first letter uppercase, it is React component
    example: node: 'Tabs'
  */
  node: 'div',

  /*
    tag props or component props
    example: style: {}, src: 'img/path'
  */
  props: {},

  /*
    component recursive children
    array, object, string, boolean, number
    example: children: [{
      node: 'p',
      children: {
        node: 'span',
        children: 'span',
      },
    }]
  */
  children: [],
}
```

### Helper

Puffin provides helper function `p` for parsing scheam `props`

```js
import { p } from '@fratercula/puffin'

const props = {
  style: {
    color: 'red',
  },
  tab: {
    node: 'Icon',
    props: {
      type: 'link',
    },
  },
}

const parsed = p(props)
/*
  {
    style: {
      color: 'red',
    },
    tab: (<Icon type="link" />)
  }
*/
```

**basic**

```js
// given
{
  style: {
    color: 'red',
  },
  href: 'link/to',
}

// out
<... style="color: red" href="link/to" />
```

**React component**

```js
// given
{
  tab: {
    node: 'Icon',
    props: {
      type: 'link',
    },
  },
}

// out
<... tab={(<Icon type="link" />)} />
```

**function**

```js
// given
{
  tab: {
    arguments: ['text', 'record'],
    node: 'div',
    children: '${text}, ${record.name}',
  },
}

// out
<... tab={(text, record) => {
  return (<div>{`${text}, ${record.name}`}</div>)
}} />
```

**callback function**

```js
import { C } from '@fratercula/puffin'

<C onChange={(name, args) => console.log(name, args)} />

// given
{
  afterChange: {
    function: 'afterChange',
  },
}

// out
<... afterChange={args => onChange('afterChange', args)} />
```

### Component

```js
import React, { Component } from 'react'
import { Timeline } from 'antd'
import { C, p } from '@fratercula/puffin'

class Custom extends Component {
  static puffinParse = false // disable puffin parse data

  render() {
    const { props, children } = this.props
    const {
      pending,
      mode,
      other,
      ...rest
    } = props

    const parsed = p(other)

    return (
      <Timeline
        {...rest}
        pending={pending}
        mode={mode}
        other={parsed}
      >
        {
          children.map((item, i) => {
            const { props: childProps = {} } = item
            const { dot, color, ...childRest } = childProps
            const node = { ...item, prop: childRest, node: 'div' }

            return (
              <Timeline.Item
                key={i}
                color={color}
                dot={dot ? (<C {...dot} />) : undefined}
              >
                <C {...node} />
              </Timeline.Item>
            )
          })
        }
      </Timeline>
    )
  }
}

function Another({ node, props, children }) {
  // ...
}

Another.puffinParse = false // not parse, use origin data

export default { Custom, Another }
```

## License

MIT

## Relevance

Puffin
