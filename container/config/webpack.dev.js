const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const port = 8080;
const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    // historyApiFallback: true,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        card: "card@http://localhost:8081/remoteEntry.js",
        batch: "batch@http://localhost:8082/remoteEntry.js",
        auth: "auth@http://localhost:8083/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
  optimization: {
    moduleIds: "hashed",
    minimize: false,
  },
};

module.exports = merge(commonConfig, devConfig);
