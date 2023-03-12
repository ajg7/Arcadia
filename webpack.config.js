const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true
  },  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
  ],
};
