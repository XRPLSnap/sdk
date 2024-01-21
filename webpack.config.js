const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
        ws: require.resolve('websocket-polyfill')
    }
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname),
    library: 'xrpl', // This will still expose your exports under window.MyBundle
    libraryTarget: 'window'
  },
  mode: 'development',
};