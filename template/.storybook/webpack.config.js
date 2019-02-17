const path = require("path")

module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      include: path.resolve(__dirname, "../"),
      use: [
        {
          loader: require.resolve("ts-loader")
        }
      ]
    },
    {
      test: /\.s?css$/,
      loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    }
  );

  config.resolve.extensions.push(".ts", ".tsx", ".css", ".scss");

  return config;
};