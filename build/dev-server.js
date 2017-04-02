const express = require('express')
const opn = require('opn')

const app = express()
const port = process.env.PORT || 9000
const server = app.listen(9000)
