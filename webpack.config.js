var path = require('path');

var webpack = require('webpack');

var HTMLPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    plugins: [
        new CleanPlugin('public'),
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 9000,
            server: { baseDir: ['public'] }
        })
    ],
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    watch: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src'],
                        }
                    }
                ]
            }
        ]
    },
}