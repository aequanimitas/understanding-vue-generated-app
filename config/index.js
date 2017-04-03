const path = require('path')

module.exports = {
  build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist')
  },
	dev: {
		env: require('./dev.env'),
    port: 9000,
    autoBrowserOpen: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
		cssSourceMap: false
	}
}
