const base = require('./base'),
  path = require('path'),
  fs = require('fs'),
  webpack = require('webpack'),
  minify = require('babel-minify-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  distPath = path.resolve(__dirname, '../dist'),
  fsExtra = require('fs-extra');

// Create CNAME
fs.writeFile(path.join(distPath, 'CNAME'), 'www.teufel-it.de', err => {
  if (err) {
    throw err;
  }
});

// Copy sidemap.txt
fsExtra.copySync(
  path.join(__dirname, '../public/sitemap.txt'),
  path.join(__dirname, '../dist/sitemap.txt')
);

base.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: 'css-loader?minimize',
    fallback: 'style-loader'
  })
});
base.plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function(module) {
      // This prevents stylesheet resources with the .css or .scss extension
      // from being moved from their original chunk to the vendor chunk
      if (module.resource && /^.*\.(css|scss)$/.test(module.resource)) {
        return false;
      }
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new minify(
    {},
    {
      sourceMap: null
    }
  ),
  new ExtractTextPlugin('styles.css')
);
base.devtool = 'source-map';
module.exports = base;
