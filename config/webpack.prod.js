const path = require('path');
const webpack = require('webpack');
// const liveReloadPlugin = require('webpakc-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        index:[
            path.join(__dirname, '../src/public/scripts/thumb.js'),
            path.join(__dirname, '../src/public/scripts/myUnderscore.js')
        ],
        tag:[
            path.join(__dirname, '../src/public/scripts/main.js')
        ]
    },
    output:{
        filename: 'public/scripts/[name]-[hash:5].js',
        path: path.join(__dirname, '../build/')
    },
    module:{
        rules:[
            {
                test:/\.es$/,
                exclude:/(node_modules|bower_componments)/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['es2015']
                    }
                }
            }
            // ,{
            //     test:/\.css$/,
            //     loader:ExtractTextPlugin.extract("style-loader","css-loader")
            // }
            ,{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader:"css-loader",
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:"dev"
            }
        })
        // ,new liveReloadPlugin({
        //     appendScriptTag:true
        // })
        , new ExtractTextPlugin("public/css/[name]-[hash:5].css")
        , new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
                drop_console: false
            }
        })
    ]
}