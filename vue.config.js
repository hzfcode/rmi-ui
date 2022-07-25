const devConfig = require('./build/webpack.dev.js')
const comConfig = require('./build/webpack.component.js')

module.exports = process.env.NODE_ENV === 'development' ? devConfig : comConfig
