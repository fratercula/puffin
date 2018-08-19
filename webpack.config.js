const { NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
const umd = NODE_ENV === 'production'
const demo = NODE_ENV === 'demo'

let output = {
  library: 'puffin',
  libraryTarget: umd ? 'umd' : 'commonjs2',
  filename: 'puffin.js',
  path: `${__dirname}/${umd ? 'dist' : 'lib'}`,
}

if (dev) {
  output = { filename: 'puffin.js' }
}

if (demo) {
  output = {
    filename: 'index.js',
    path: `${__dirname}/docs`,
  }
}

module.exports = {
  mode: dev ? 'development' : 'production',

  entry: dev || demo ? './entry/index.js' : './entry/entry.js',

  output,

  resolve: {
    extensions: ['.js'],
  },

  devServer: {
    disableHostCheck: true,
    contentBase: './entry',
    port: 8000,
    host: '0.0.0.0',
    stats: 'minimal',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },

  devtool: dev ? 'cheap-module-eval-source-map' : 'source-map',

  externals: dev ? {} : {
    react: umd || demo ? 'React' : 'commonjs react',
    'react-dom': umd || demo ? 'ReactDOM' : 'commonjs reactDom',
    antd: umd || demo ? 'antd' : 'commonjs antd',
  },
}
