class DistAnalysisWebpackPlugin {
  filename = 'default.md'
  constructor(options) {
    console.log('我是 webpack.config.js 输入的配置：', options)

    if (options.fileName) {
      this.filename = options.fileName
    }
  }

  apply(compiler) {
    console.log('I am DistAnalysisWebpackPlugin: start')

    const fileName = this.filename

    compiler.hooks.compilation.tap('dist-analysis-webpack-plugin', (compilation) => {
      compilation.hooks.processAssets.tap('dist-analysis-webpack-plugin', function (assets) {
        const len = Object.keys(assets).length

        let content = `一共 ${len} 个文件 \n`

        console.log(content)

        Object.keys(assets).forEach((filename) => {
          content += ` - ${filename} 【${assets[filename].size()}字节】 \n`
        })

        compilation.assets[fileName] = {
          source: () => content,
        }
      })
    })
  }
}

module.exports = DistAnalysisWebpackPlugin