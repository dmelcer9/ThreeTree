var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var DIST_DIR   = path.join(__dirname, "docs"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
	context: CLIENT_DIR,

	entry: "./js/main.js",

	output: {
		path:     DIST_DIR,
		filename: "bundle.js"
	},

  module: {
    loaders: [
      { test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },

	resolve: {
		extensions: ['.js','.css']
	},

  plugins: [
    new CopyWebpackPlugin([
      {from: "./html/index.html", to:"index.html"}
    ])
  ]
};
