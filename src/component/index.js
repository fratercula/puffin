import Timeline from './timeline'

const Antd = require('antd')

const Apps = {}

Object.keys(Antd).forEach((key) => {
  Apps[key] = Antd[key]
})

Apps.Timeline = Timeline

export default Apps
