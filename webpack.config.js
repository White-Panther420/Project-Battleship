const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]", // Output path and filename
            },
          },
        ],
      },
      {
        test: /\.(mp3|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // You can customize the output filename here
              outputPath: "assets/audio/", // Define the output directory
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Battleship",
      filename: "index.html",
      template: "src/templete.html",
    }),
  ],
};
