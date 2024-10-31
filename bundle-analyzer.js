module.exports =
  ({ enabled = true, ...otherOptions } = {}) =>
  (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        if (enabled) {
          const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
          config.plugins.push(
            new BundleAnalyzerPlugin({
              ...otherOptions,
              analyzerMode: "static",
              reportFilename: options.isServer
                ? "../analyze/server.html"
                : "./analyze/client.html",
              statsFilename: options.isServer
                // ? "../analyze/serverStats.json"
                ? "../../../stats/serverStats.json"
                : "./analyze/clientStats.json",
            })
          );
        }

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }
        return config;
      },
    });
  };
