var path = require("path");

module.exports = {
  entry: "./script/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // Add the JSHint loader
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/, // Run the loader on all .js files
  //       exclude: /node_modules/, // ignore all files in the node_modules folder
  //       use: "jshint-loader",
  //     },
  //   ],
  // },
};
