//var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool:  "source-map" ,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
          test: /\.scss$/,
          loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      }
      // {
      //     test: /\.scss$/i,
      //     loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' )
      // }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  }
  // externals: {
  //   'Config': JSON.stringify(dubug ? require('./src/config.dev.json') : require('./src/config.prod.json') )
  // },
  // externals: {
  //   'Config': JSON.stringify(process.env.ENV === 'production' ? {
  //     serverUrl: "https://myserver.com"
  //   } : {
  //     serverUrl: "http://rest.learncode.academy"
  //   })
  // },
  // sassLoader: {
  //       includePaths: [ 'src/style' ]
  //   },
  // plugins: [
  //   new ExtractTextPlugin('style.css')
  // ],
};
