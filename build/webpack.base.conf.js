const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		app: './src/main.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': resolve('src')
		}
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: config.dev.assetsPublicPath
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
			  loader: 'eslint-loader',
			  enforce: 'pre',
			  include: [resolve('src'), resolve('test')],
			  options: {
					formatter: require('eslint-friendly-formatter')
				}	
			},
		  {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			}	
		]
  }
}
