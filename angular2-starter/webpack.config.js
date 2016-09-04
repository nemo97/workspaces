module.exports = {
  devtool: 'source-map',
  entry: "./app/main",
  output: {
    path: __dirname,
    filename: './dist/bundle.js'    
  },  
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/,  loader: 'ts-loader', exclude: /node_modules/ },
    ]
  }
};
