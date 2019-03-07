const { NODE_ENV } = process.env

const output = {}

if (NODE_ENV === 'docs') {
  output.filename = 'index.[hash:8].js'
}

if (NODE_ENV === 'umd') {
  output.library = 'puffin'
  output.libraryTarget = 'umd'
}

module.exports = {
  externals: [
    {
      name: 'react',
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      urls: 'https://cdn.staticfile.org/react/16.8.2/umd/react.development.js',
      // urls: 'https://cdn.staticfile.org/react/16.8.2/umd/react.production.min.js',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      // urls: 'https://cdn.staticfile.org/react-dom/16.8.2/umd/react-dom.production.min.js',
      urls: 'https://cdn.staticfile.org/react-dom/16.8.2/umd/react-dom.development.js',
    },
    {
      name: 'antd',
      root: 'antd',
      commonjs2: 'antd',
      commonjs: 'antd',
      amd: 'antd',
      urls: ['https://cdn.staticfile.org/moment.js/2.24.0/moment.min.js', 'https://cdn.staticfile.org/antd/3.13.6/antd-with-locales.min.js'],
    },
  ],
  registry: 'https://registry.npm.taobao.org',
  mode: !NODE_ENV ? 'development' : 'production',
  output,
}
