const glob = require('glob');
let entry = __dirname + '/app/src/page.js';
let outputPath = __dirname + '/dist/';
let devtool = 'source-map';;

module.exports = {
  entry: entry,
  output: {
    path: outputPath,
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            }
          }
        ]
      }
    ]
  }
}