var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require('./helpers');
var webpack = require('webpack');
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',
    output: {
        path: helpers.root('dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            },
            mangle: {
                keep_fnames: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("./bundle.css")
    ]
});