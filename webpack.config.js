const devWebpack = require('./config/webpack.dev');
const prodWebpack = require('./config/webpack.prod');

switch(process.env.NODE_ENV){
    case 'dev':
        module.exports = devWebpack;
        break;
    case 'prod':
        module.exports = prodWebpack;
        break;
    default:
        module.exports = devWebpack;
}

// var webpack = require('webpack')
// var path = require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var swigPlugin = require('./build/swig.js');

// function resolve(dir) {
//     return path.join(__dirname, '..', dir)
// }

// module.exports = {
//     entry: {
//         app: './public/scripts/main.js'
//     },
//     plugins: [
//         new webpack.ProvidePlugin({
//             $: "jquery",
//             jQuery: "jquery",
//             "windows.jQuery": "jquery"
//         })
//     ],
//     output: {
//         path: '/',
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: 'babel-loader',
//                 include: [resolve('public')]
//             },
//             { 
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: __dirname + "/template/index_dev.html"//new 一个这个插件的实例，并传入相关的参数
//         }),
//         new swigPlugin()
//     ],

//     devServer: {
//       contentBase: "./",//本地服务器所加载的页面所在的目录
//       historyApiFallback: true,//不跳转
//       inline: true//实时刷新
//     } 
// }
