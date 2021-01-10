const pino = require('pino')
const config = require('../../config').logging

module.exports = pino(config)
