const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: false,
  },
  entry: {
    popup: path.resolve(__dirname, "./src/entry/index-popup.js"),
    options: path.resolve(__dirname, "./src/entry/index-options.js"),
    blogs: path.resolve(__dirname, "./src/entry/index-blogs.js"),
    todo: path.resolve(__dirname, "./src/entry/index-todo.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                {
                  plugins: ["@babel/plugin-proposal-class-properties"],
                },
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "popup.html",
      template: "src/html/popup.html",
      chunks: ["popup"],
    }),
    new HtmlWebpackPlugin({
      filename: "options.html",
      template: "src/html/options.html",
      chunks: ["options"],
    }),
    new HtmlWebpackPlugin({
      filename: "blogs.html",
      template: "src/html/blogs.html",
      chunks: ["blogs"],
    }),
    new HtmlWebpackPlugin({
      filename: "todo.html",
      template: "src/html/todo.html",
      chunks: ["todo"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/manifest.json", to: "[name].[ext]" },
        { from: "src/background.js", to: "[name].[ext]" },
        { from: "src/inject_script.js", to: "[name].[ext]" },
        { from: "src/images/*.png", to: "[name].[ext]" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};