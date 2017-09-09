const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    entry: {
        gui: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{loader: 'babel-loader'}],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitError: false,
                    emitWarning: true
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]'}]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]'}]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ]
};