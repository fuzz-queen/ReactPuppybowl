module.exports = {
    entry: ["./src/main.jsx"],
    output: {
      path: __dirname + "/public",
      filename: "bundle.js",
    },
    context: __dirname,
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
    },
  };