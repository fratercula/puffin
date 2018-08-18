const { NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
const umd = NODE_ENV === 'production'

module.exports = {
  mode: dev ? 'development' : 'production',

  entry: dev ? './entry/index.js' : './entry/entry.js',

  output: dev ? { filename: 'puffin.js' } : {
    library: 'puffin',
    libraryTarget: umd ? 'umd' : 'commonjs2',
    filename: 'puffin.js',
    path: `${__dirname}/${umd ? 'dist' : 'lib'}`,
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
    react: umd ? 'React' : 'commonjs react',
    'react-dom': umd ? 'ReactDOM' : 'commonjs reactDom',
    antd: umd ? 'antd' : 'commonjs antd',
  },
}
