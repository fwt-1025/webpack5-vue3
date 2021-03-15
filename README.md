### 项目运行命令
- 前端服务 npm run dev | yarn dev
- node端服务 npm run serve | yarn serve

### git 提交规范
#### type

用于说明 commit 的类别，只允许使用下面的标识。

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- del：删除某些代码，或者代码文件。
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- perf: 代码修改用于提高性能。
- test：增加测试
- chore：构建过程或辅助工具的变动
- merge: 合并分支

#### scope

scope用于说明 commit 影响的范围。数据层、视图层。或者是*, 所有。

#### subject

`subject`是 commit 目的的简短描述，不超过50个字符。

#### 举例说明 	[新功能]

```git
feat: 添加新的功能xxx
scope: *
subject: 平台新增xx功能
```

### 项目构建
- webpack5 + vue3 + vant@next + typescript

- loader相关 babel 使用的是7版本以上。
    - babel-loader
    - @babel/core babel中心库
    - @babel/preset-env babel编译转换， 可配置按需编译，根据浏览器不同。
    - ts-loader typescript语法编译为js
    - vue-loader vue模板编译， 依赖@vue/compiler-sfc
    - thread-loader 线程loader， 开启多线程，加快构建速度。
- plugins
    - html-webpack-plugin 自动生成html模板。
    - optimize-css-assets-webpack-plugin  压缩css
    - mini-css-extract-plugin 抽离css到单独的css文件夹,支持按需加载。
    - terser-webpack-plugin 压缩js，针对ES6。webpack推荐。

> 注意点：ts-loader 与 thread-loader 无法一起使用， 会报错， 已经向ts-loader社区提出问题，但是未得到答复。![https://github.com/TypeStrong/ts-loader/issues/1268](https://github.com/TypeStrong/ts-loader/issues/1268)

> vue-loader 依赖于@vue/complier-sfc 不安装会报错，无法编译vue的模板语法。

> vue-router 中不能提取公用引入组件的方法， webpack会报错，找不到相关模块。目前不清楚是webpack5的问题还是配置问题。![https://github.com/webpack/webpack/issues/12856](https://github.com/webpack/webpack/issues/12856)