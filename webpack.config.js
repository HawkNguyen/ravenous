const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "production",
  output: {
    filename: 'main_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // For every file with a js or jsx extension Webpack pipes the code through babel-loader for transforming ES6 down to ES5.
            // we can avoid adding .babelrc by declaring presets here
            presets: ['@babel/preset-env',"@babel/preset-react"],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
       test: /\.css$/,
       use: [
         // style-loader Add exports of a module as style to DOM
         // css-loader Loads CSS file with resolved imports and returns CSS code
         //The order matters, and it’s reversed (the last is executed first).
         'style-loader',
         'css-loader'
       ]
     },
     {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //any file that's higher than limit 8kb will be loaded using file-loader
              limit: 8000
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: "./src/webpack/index.html",
      filename: "./index.html",
      favicon: "./src/webpack/favicon.ico"
    })
  ]
};
