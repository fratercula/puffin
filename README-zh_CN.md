# Puffin

Puffin 是一个基于 React 的组件，通过 Puffin，你可以使用 JSON Schema “描述” 页面结构。

一个简单例子：

以下 json schema

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

描述出来的页面结构为

```html
<div style="color: red">
  <p><span>Text</span></p>
</div>
```

同时，Puffin 支持第三方 UI 组件库，例如 [Ant Design](https://github.com/ant-design/ant-design)

```json
{
  "node": "Carousel",
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
```

具体例子可以查看 [demo](https://fratercula.github.io/puffin/)，你可以修改 JSON Schema 查看页面变化

## 安装

```bash
$ npm i @fratercula/puffin -S
```

## 使用

简单示例

```js
import React from 'react'
import { render } from 'react-dom'
import puffin, { Recomponent } from '@fratercula/puffin'
import * as antd from 'antd'

puffin.library(antd) // 使用 antd 作为底层 UI 组件库

// 定义页面结构
const schema = {
  "node": "Carousel",
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

render(<Recomponent {...schema} />, document.getElementById('root'))
```

相关 API 说明

### 定义组件

这里可以使用的 API 为 `library`，`register`

定义基础组件库

```js
import React, { Component } from 'react'
import puffin from '@fratercula/puffin'
import * as antd from 'antd'
import * as material from '@material-ui/core'

puffin.library(antd) // 使用 antd
puffin.library(material) // 或者使用 material UI
```

自定义组件

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import puffin, { Recomponent } from '@fratercula/puffin'

class TableAPI extends Component {
  static propTypes = {
    api: PropTypes.string.isRequired,
  }

  state = {
    props: {},
  }

  onClick = () => {
    const { api } = this.props
    window.fetch(api)
      .then(res => res.json())
      .then(props => this.setState({ props }))
  }

  render() {
    const { props } = this.state

    if (!Object.keys(props).length) {
      return (
        <Button type="primary" onClick={this.onClick}>Fetch Data</Button>
      )
    }

    return (<Recomponent node="Table" props={props} />)
  }
}

puffin.register('TableAPI', TableAPI) // 注册组件
```

### 使用组件

使用 `Recomponent` 解析 JSON Schema

```js
import React from 'react'
import { render } from 'react-dom'
import { Recomponent } from '@fratercula/puffin'

const schema = {
  // node: ...
  // props: ...
  // children: ...
}

render(<Recomponent {...schema} />, document.getElementById('root'))
```

### 辅助函数

Puffin 同时提供一个辅助函数 `Reprops`，用于解析一些传入组件的 props

解析为 ReactNode 节点

```js
import { Reprops } from '@fratercula/puffin'

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

const parsed = Reprops(props)
// 解析为
// {
//   style: {
//     color: 'red',
//   },
//   tab: (<Icon type="link" />)
// }
```

解析为函数节点

```js
import { Reprops } from '@fratercula/puffin'

const props = {
  style: {
    color: 'red',
  },
  tab: {
    variable: ['text', 'record'],
    node: 'div',
    children: '${text}, ${record.name}',
  },
}

const parsed = Reprops(props)
// 解析为
// {
//   style: {
//     color: 'red',
//   },
//   tab: (text, record) => {
//     return (<div>{`${text}, ${record.name}`}</div>)
//   }
// }
```

## JSON Schema

Puffin 解析 JSON Schema 为页面结构，JSON Schema 需要满足一定条件

### 主要字段说明

| 字段 | 类型 | 必须 | 说明 |
| --- |---| ---| --- |
| node | string | 是 | 声明当前节点，当首字母大写会解析成第三方组件，首字母小写则解析成 HTML DOM |
| props | object | 否 | 声明当前节点属性，允许传入 React 节点或者函数，具体看 API 说明 |
| children | 任意 | 否 | 声明当前节点的子节点，可以递归传入节点结构 |

例子

```js
{
  node: 'Card',
  props: {
    title: 'Card title',
    style: {
      marginTop: 15,
    },
  },
  children: [
    {
      node: 'Card',
      props: {
        title: 'inner title',
        type: 'inner',
      },
      children: [
        {
          node: 'Card.Grid',
          props: {
            style: {
              width: '25%',
              textAlign: 'center',
            },
          },
          children: 'Grid',
        },
      ],
    },
    {
      node: 'Card',
      props: {
        style: {
          marginTop: 16,
          width: 240,
        },
        type: 'inner',
        title: 'inner title',
        cover: {
          node: 'img',
          props: {
            src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          },
        },
        actions: [
          {
            node: 'Icon',
            props: {
              type: 'setting',
            },
          },
        ],
      },
      children: [
        {
          node: 'Card.Meta',
          props: {
            title: 'Europe Street beat',
            description: 'description',
          },
        },
      ],
    },
  ],
}
```

## 组件解析说明

### 组件父子级依赖问题

一些基础库，例如 Ant Design，某些组件父级是依赖子级属性的，例如 Tabs/Timeline。如果强行隔离父子级关联，会导致渲染错误，这里也有一个 issue [ant-design/ant-design#5165](https://github.com/ant-design/ant-design/issues/5165)

由于 `JSX` 的特性，Puffin 在解析 JSON Schema 时候，是会隔离组件父子级的直接联系的。所以就会导致组件渲染出错。

所以需要对一些组件进行简单处理，下面是一个处理 `Timeline` 组件例子

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'antd'
import { Recomponent } from '@fratercula/puffin'

class PuffinTimeline extends Component {
  static propTypes = {
    props: PropTypes.object,
    children: PropTypes.array,
  }

  static defaultProps = {
    props: {},
    children: [],
  }

  render() {
    const { props, children } = this.props
    const {
      pending,
      mode,
      ...rest
    } = props

    return (
      <Timeline {...rest} pending={pending} mode={mode}>
        {
          children.map((item, i) => {
            const { props: childProps = {} } = item
            const { dot, color, ...childRest } = childProps
            const node = { ...item, prop: childRest, node: 'div' }

            return (
              <Timeline.Item
                key={i}
                color={color}
                dot={dot ? (<Recomponent {...dot} />) : undefined}
              >
                <Recomponent {...node} />
              </Timeline.Item>
            )
          })
        }
      </Timeline>
    )
  }
}

PuffinTimeline.parse = false

export default PuffinTimeline
```

经过处理后，Timeline 组件就可以用 JSON Schema 描述出来了

### JSON 默认解析

默认情况下，Puffin 会对 JSON Schema 进行解析，解析成 ReactNode 以及函数

但是有些自定义组件不希望数据被解析，这时候可以设置组件属性 `parse` 为 `false` 跳过解析，返回原始 JSON Schema

```js
import React from 'react'

function Custom({ node, props, children }) {
  // ...
}

Custom.parse = false // 指定不解析，使用原始数据

export default Custom
```
