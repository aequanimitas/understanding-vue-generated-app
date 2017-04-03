const path = require('path')
const config = require('../config')

exports.assetsPath = function(_path) {
	let assetsSubDirectory = config.dev.assetsSubDirectory
	return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
	options = options || {}
	let cssLoader = {
		loader: 'css-loader',
		options: {
			minimize: process.env.NODE_ENV === 'production',
			sourceMap: options.sourceMap
		}
	}

	function generateLoaders(loader, loaderOptions) {
		let loaders = [cssLoader]
		if(loader) {
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap
 			  })
			})
		}

		if(options.extract) {
			return ExtractTextPlugin.extract({
				use: loaders,
				fallback: 'vue-style-loader'
			})
		} else {
			return ['vue-style-loader'].concat(loaders)
		}

		return {
			css: generateLoaders(),
			postcss: generateLoaders(),
			less: generateLoaders('less'),
			sass: generateLoaders('sass', {indentedSyntax: true}),
			scss: generateLoaders('scss'),
			stylus: generateLoaders('stylus'),
			styl: generateLoaders('stylus')
		}
	}
}
