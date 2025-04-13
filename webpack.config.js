// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/frontend/place_ships/create_board.js",
    play: "./src/frontend/operator.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "src/play.html",
      filename: "play.html",
      chunks: ["play"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

//for regular board
// module.exports = {
//   mode: "development",
//   entry: "./src/frontend/operator.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.html$/i,
//         loader: "html-loader",
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
// };
