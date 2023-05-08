'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Resume Website',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            template: './src/index.html',
            inject: 'body',
        }),
    ],
}
