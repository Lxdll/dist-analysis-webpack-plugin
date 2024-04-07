# dist-analysis-webpack-plugin

产物大小分析 webpack plugin

1. 通过在 `compilation.hooks.processAssets` 的钩子函数中注册回调函数，实现该功能。
2. 回调函数的入参是一个 `key` 为文件名称，`value` 为文件内容的对象。
3. 我们可以通过文件内容上的 `size` 方法拿到该文件大小，单位是 `bytes`。
4. 最后我们使用 `compilation.assets` 输出到指定的 `Markdown` 文件中。

## 收获

1. 在传入的 `options`，我们可以使用 `schema-utils` 来校验传入的参数合法性。
2. 在 `compiler` 和 `compilation` 上有很多提供的钩子函数。
   <a href="https://www.webpackjs.com/api/compiler-hooks/" target="_blank">钩子函数列表</a>
