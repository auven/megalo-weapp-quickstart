## megalo-quickstart

> 基于 [megalo-demo](https://github.com/kaola-fed/megalo-demo) ，与其保持同步更新。

megalo 项目模板，对微信小程序做了相关的处理。

## 使用模板

本模板使用 [`vue-cli`](https://github.com/vuejs/vue-cli) 来初始化项目，首先需要安装 `@vue/cli` （已安装可跳过）
``` bash
npm install -g @vue/cli
```

目前 `@vue/cli` 已经更新到 `3.x` 了，本模板是 `2.x` 的模板，所以在安装完 `@vue/cli` 后，还需要安装 `@vue/cli-init`
``` bash
npm install -g @vue/cli-init
```

接着就可以初始化项目了
``` bash
vue init auven/megalo-quickstart megalo-project
```

## 运行

安装依赖:

```bash
cd megalo-project
npm i
```

微信小程序版本：

```bash
npm run dev:wechat
npm run build:wechat
```

支付宝小程序版本：

```bash
npm run dev:alipay
npm run build:alipay
```

百度智能小程序版本：

```bash
npm run dev:swan
npm run build:swan
```

### 使用微信小程序开发工具打开

请选择项目根路径打开。

## 其他
环境变量相关的问题和文档[点击这里](https://github.com/megalojs/megalo-env-plugin)查看

### megalo 官方能力

- 页面文件支持直接引用 `.vue` 文件，示例参考 `/src/pages/index.vue`
- 支持在 `.vue` 里写页面的 `config` 配置，示例参考 `/src/pages/index.vue`
- 支持环境变量
- 更多查看[官方文档](https://megalojs.org/)...

## 优化

### 复制图片文件

megalo 官方已经支持自动处理图片文件的拷贝了，不过不支持将分包里的图片复制到分包里面，而是全部复制到了主包里面，所以此模板使用 `copy-webpack-plugin` 来复制图片文件，实现分包图片资源的正确拷贝。

原理请查看 `/build/copyImages.js` 。这里实现了，自动在包根路径下创建 `images` 文件夹，你只需将图片放进去，就可以复制到对应的包里面了。在页面中引用，使用绝对路径的方式，例如 `<img src="/packageA/images/megalobox.jpeg">` ，可以查看 `/packageA/pages/a/index.vue` 。

### 复制第三方小程序UI组件

同样的，这里也使用 `copy-webpack-plugin` 来复制。一般我们使用第三方UI组件，都是下载之后放到我们打包后的文件夹下，这样有点繁琐。所以这里就借助 `copy-webpack-plugin` 将 `node_modules` 里的第三方组件复制到打包后的文件夹下，实现自动化，可更新。

原理可查看 `/build/copyCustomCom` 文件夹里面的内容，里面有复制 `vant-weapp` 的示例，其他第三方组件可以参考示例。

### postcss

- [用了 mini-css-extract-plugin 之后postcss 不能加后缀](https://segmentfault.com/q/1010000015101917?sort=created)

我们项目里只能在 `package.json` 里设置 `"browserslist": ["cover 99.5% in CN"]` 才会生效，并且 `.postcssrc.js` 里要添加 `autoprefixer: {}`

### 注意事项

- 入口文件 `src/index.js` 涉及到添加分包或减少分包的变动，建议重新运行 `npm run dev:wechat`