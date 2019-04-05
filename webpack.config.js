/**
 * Webpack config
 *
 * @author CodeX (team@ifmo.su) https://github.com/codex-team/webpack-build-config
 * @copyright CodeX 2017
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


/**
 * @return {String} Bundle header with Module description
 */
const bundleComment = require('./bundleComment.js');

/**
 * Final webpack config
 */
var config = {
  /**
   * Entry point
   */
  entry: './src/shortcuts.js',
  /**
   * Set bundle params
   *
   * filename       - main bundle file from package.json
   * library        - module name from package.json
   * libraryTarget  - 'umd' is a way for your library to work with all the module
   *                  definitions (and where aren't modules at all).
   *                  It will work with CommonJS, AMD and as global variable.
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shortcuts.js',
    library: 'Shortcut',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  /**
   * Tell webpack what directories should be searched when resolving modules.
   */
  resolve: {
    modules: [path.join(__dirname, 'src'),  'node_modules'],
    extensions: [ '.js' ]
  },
  module: {
    rules: [
      /**
       * Process JS files
       */
      {
        test : /\.js$/,
        exclude: /node_modules/,
        use : [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          },
          {
            loader: 'eslint-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    /**
     * Add comments before output file lib/moduleDispatcher.js
     * @type {String} — bundleComment
     */
    new webpack.BannerPlugin({
      banner: bundleComment
    })
  ],

  optimization: {
    minimizer: [ new UglifyJsPlugin() ],
  },
};

module.exports = config;