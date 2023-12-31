const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const port = 8082;
const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "batch",
      filename: "remoteEntry.js",
      exposes: {
        "./BatchApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
     react: {
      eager: true,
     },
      
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
