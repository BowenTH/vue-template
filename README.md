# vue-template

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

``` bash
# user less
npm i less less-loader -S

> 修改webpack.base.conf.js(能引用外部less文件)

{
    test: /\.less$/,
    loader: "style-loader!css-loader!less-loader"
}
# vuex
# mixin
# vue-router
# axios
    
```