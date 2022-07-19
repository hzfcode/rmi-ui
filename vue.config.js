const devConfig = require('./build/webpack.dev.js')
const comConfig = require('./build/webpack.component.js')

let config = process.env.NODE_ENV === 'development' ? devConfig : comConfig
module.exports = config
