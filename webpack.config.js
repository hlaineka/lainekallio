const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./custom.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'custom.js',
  },
  devtool: true,
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /build/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /build/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'sass-loader',
          },
        ],
      },
			{    
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: "file-loader"
			},
    ],
  },
  resolve: {
    alias: {
      'roidu-lib': path.resolve(__dirname, 'roidu-lib'),
    },
    extensions: ['.js', '.scss', '.css'],
  },
};
