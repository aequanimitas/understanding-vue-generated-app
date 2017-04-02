const path = require('path')

module.exports = {
  build: {
		index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist')
  },
	dev: {
		env: 'development',
    port: 9000,
    autoBrowserOpen: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
		cssSourceMap: false
	}
}
