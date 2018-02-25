var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var swigPlugin = require('./build/swig.js');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './public/scripts/main.js'
    },
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: '[name]_[hash:5].js',
        publicPath: '../dist/'
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolve('public')]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
                  })
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        }),
        new swigPlugin(),
        new ExtractTextPlugin("[name]_[hash:5].css"),
        new HtmlWebpackPlugin({
            filename:__dirname+"/views/index.html",
            template: __dirname + "/template/index.html"//new 一个这个插件的实例，并传入相关的参数
            ,inject: false 
        }),
        new UglifyJSPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
