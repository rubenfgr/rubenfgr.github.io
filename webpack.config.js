const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
      index: "./src/app.ts",
    },
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.png$|\.jpg$|\.svg$|\.ico$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 2500,
                name: "./assets/img/[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Development",
        filename: "index.html",
        template: "src/index.html",
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/data/', to: 'data/' },
          { from: 'src/assets/img/certificates', to: 'assets/img/certificates'}
        ],
      }),
    ],
  };
};
