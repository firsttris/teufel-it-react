const base = require('./base');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const distPath = path.resolve(__dirname, '../dist');

fs.writeFile(path.join(distPath,'CNAME'), 'www.teufel-it.de', (err) => {
    if (err) {
        throw err;
    }
});

base.module.rules.push(
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader?minimize',
            fallback: 'style-loader'
        })
    }
);
base.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            // This prevents stylesheet resources with the .css or .scss extension
            // from being moved from their original chunk to the vendor chunk
            if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
                return false;
            }
            return module.context && module.context.indexOf("node_modules") !== -1;
        }
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BabiliPlugin(),
    new ExtractTextPlugin('styles.css')
);
base.devtool = 'source-map';
module.exports = base;