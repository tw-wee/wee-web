module.exports = {
  entry: "./app.js",
  output: {
    filename: 'bundle.js',
    path: './build',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
