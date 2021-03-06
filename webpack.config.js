const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/hungrybear.js', // './src/index': './src/main.js'
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new Dotenv(),
		new UglifyJsPlugin({ sourceMap: true }),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Did You Get Eaten',
			template: './src/index.html',
			inject: 'head'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'eslint-loader'
			}
		]
	}
};
