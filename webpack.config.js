module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader'
        }]
      },
      {
        test: /\.svg$/,
        use: [ 'url-loader?mimetype=image/svg+xml' ]
      }
    ]
  }
}
