var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');
module.exports = {
    //页面入口文件配置
    entry: {
        index:helpers.root('index.js')
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { test: /\.(js|jsx)$/, loader: 'babel-loader', query: {compact:false,presets: ['es2015','react','stage-0']}},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.json$/, loader: 'json'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: helpers.root('src'),
        extensions: ['','.js', '.json','.css','html']
        //alias: {
        //    Home : './js/home.js',
        //    Login : './js/login.js'
        //}
    },
    //插件项
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:require('../../manifest.json')
        }),
        new ExtractTextPlugin("./bundle.css")
    ]
};

