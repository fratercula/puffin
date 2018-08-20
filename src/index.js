import * as antd from 'antd'
import Puffin from './puffin'
import Recomponent from './recomponent'
import component from './component'
import {
  Collapse,
  Timeline,
  Tabs,
} from './custom'

component.library = antd
component.register('Collapse', Collapse)
component.register('Timeline', Timeline)
component.register('Tabs', Tabs)

Puffin.library = component.library.bind(component)
Puffin.register = component.register.bind(component)

export default Puffin
export { Recomponent }
