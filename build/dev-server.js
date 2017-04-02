const config = require('../config')
if(!process.env.NODE_ENV) {
	process.env.NODE_ENV = config.dev.env.NODE_ENV
}
const express = require('express')
const webpack = require('webpack')
const opn = require('opn')
const app = express()
const port = process.env.PORT || config.dev.port
const autoOpenBrowser = !!config.dev.autoOpenBrowser
const webpackConfig = require('./webpack.dev.conf')
const compiler = webpack(webpackConfig)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath
//	quiet: true	
})
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => {}
})

app.use(devMiddleware)
app.use(hotMiddleware)
var uri = 'http://localhost:' + port

console.log('> Starting dev server...')

devMiddleware.waitUntilValid(() => {
  opn(uri)
})
app.listen(9000)
