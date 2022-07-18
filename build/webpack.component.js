// const components = require('../components.json')
// const path = require('path')

// const comConfig = {
//   lintOnSave: false,
//   transpileDependencies: true,
//   outputDir: path.resolve(__dirname, '..', 'lib'),
//   configureWebpack: {
//     entry: components,
//     output: {
//       // path: path.resolve(__dirname, 'lib'),
//       // publicPath: './',
//       filename: '[name]/index.js',
//       // chunkFilename: '[id].js',
//       libraryTarget: 'umd',
//       libraryExport: 'default',
//       library: 'bs-cs-ui',
//     },
//   },
//   css: {
//     sourceMap: false,
//     extract: {
//       filename: '[name]/style.css',
//     },
//   },
//   productionSourceMap: false,
//   chainWebpack: config => {
//     //   console.log(config,'config')
//     //   console.log('build lib lib libliblib')

//     config.resolve.alias
//       .set('@', path.resolve('examples'))
//       .set('~', path.resolve('packages'))
//       .set('#', path.resolve('src'))

//     config.optimization.delete('splitChunks')
//     config.plugins.delete('copy')
//     config.plugins.delete('preload')
//     config.plugins.delete('prefetch')
//     config.plugins.delete('html')
//     config.plugins.delete('hmr')
//     config.entryPoints.delete('app')

//     // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
//     config.module
//       .rule('js')
//       .include.add(/packages/)
//       .end()
//       .include.add(/examples/)
//       .end()
//       .include.add(/assets/)
//       .end()
//       .use('babel')
//       .loader('babel-loader')
//       .tap(options => {
//         // 修改它的选项...
//         return options
//       })
//   },
// }

// module.exports = comConfig

const path = require('path')
const fs = require('fs')
const join = path.join
function resolve(dir) {
  return path.resolve(__dirname, '../', dir)
}
function getEntries(path) {
  let files = fs.readdirSync(resolve(path))
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: './examples/main.js', // 入口
      template: './public/index.html', // 模板
      filename: 'index.html', // 输出文件
    },
  },
  css: {
    sourceMap: true,
    extract: {
      filename: 'style/[name].css', //在lib文件夹中建立style文件夹中，生成对应的css文件。
    },
  },
  outputDir: path.resolve(__dirname, '..', 'lib'),
  productionSourceMap: false,
  // 扩展 webpack 配置
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')

    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  configureWebpack: {
    entry: {
      ...getEntries('packages'),
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'umd',
    },
  },
}
