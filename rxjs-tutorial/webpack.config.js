module.exports = {
  entry: './app.js',
  output: {
      path: __dirname + "/build",
      filename: 'bundle.js'
  },
  devtool: 'source-map'
};