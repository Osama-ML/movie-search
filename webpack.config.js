const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ruleForCSS = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const rules = [ruleForCSS];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';

  return {
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
    module: { rules },
    devtool: 'source-map',
  };
};
