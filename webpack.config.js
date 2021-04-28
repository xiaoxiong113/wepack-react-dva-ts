const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const path = require('path')


module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
    // filename: 'js/[name].bundle.[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript' ],
            plugins: [
              '@babel/plugin-transform-runtime', // polyfill补全语法
              ['import', { libraryName: 'antd', style: 'css' },]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
            }
          },
          "postcss-loader",
          'less-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { 
            // loader: 'style-loader'
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            } 
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'pure',
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              }
            }
          },
          {
            loader: "postcss-loader",
          },
          { 
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          { 
            // loader: 'style-loader'
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            } 
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'pure',
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              }
            }
          },
          {
            loader: "postcss-loader",
          },
          { 
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(styl)$/,
        exclude: /node_modules/,
        use: [
          { 
            // loader: 'style-loader'
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            } 
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: 'pure',
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              }
            }
          },
          {
            loader: "postcss-loader",
          },
          { 
            loader: 'stylus-loader',
          }
        ]
      },
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    new WebpackBar({
      name: "xiaoxiongnice",
      color: 'pink'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ],
  devServer: {
    port:7777,
    open: true,
    inline: true,
    hot: true,
    quiet: true,  //清除控制台console
    historyApiFallback: true,
  },
  // target: 'web',
}