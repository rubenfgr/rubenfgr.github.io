const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    mode: "development",
    entry: "./src/app.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        /*         {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          // use[1] = 'css-loader'
          // use[0] = 'style-loader'
        }, */
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.png$|\.jpg$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 25000,
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./src/**/*.html",
            to: "[name][ext]",
          },
        ],
      }),
    ],
  };
};
