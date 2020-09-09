const path = require('path');

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/'
  // : '/dev/',
 
  outputDir: path.resolve(__dirname, "./dist"),
//   configureWebpack: {
//     devServer: {
//       contentBase: "./public",
//       host: "0.0.0.0",
//       port: 88,
//       historyApiFallback: true, // is it enabled ?
//       inline: true,
//     },
//   },
};