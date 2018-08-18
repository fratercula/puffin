const { NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

module.exports = {
  mode: NODE_ENV,

  entry: dev ? './entry/index.js' : './entry/umd.js',

  output: dev ? { filename: 'puffin.js' } : {
    library: 'puffin',
    libraryTarget: 'umd',
    filename: 'puffin.js',
  },

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
        loader: ['style-loader?sourceMap', 'css-loader?sourceMap', 'less-loader?sourceMap'],
      },
    ],
  },

  devtool: dev ? 'cheap-module-eval-source-map' : 'source-map',

  externals: dev ? {} : {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
  },
}
