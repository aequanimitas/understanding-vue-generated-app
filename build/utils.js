const path = require('path')
const config = require('../config')
exports.assetsPath = function(_path) {
	let assetsSubDirectory = config.dev.assetsSubDirectory
	return path.posix.join(assetsSubDirectory, _path)
}
