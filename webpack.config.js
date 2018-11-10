const path = require("path");

const APP_DIR = path.join(__dirname, "src");
const BUILD_DIR = path.join(__dirname, "public");

module.exports = {
  entry: path.join(APP_DIR, "app.js"),
  output: {
    path: BUILD_DIR,
    filename: path.join("scripts", "bundle.js")
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: BUILD_DIR
  }
};
