/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const poststylus = require('poststylus')
const values = require('postcss-modules-values')

const config = {
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './src/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.[hash].js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /.styl$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css-loader!stylus-loader')
        }, {
            test: /.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css-loader?modules&camelCase!postcss-loader')
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    },
    postcss: [
        values
    ],
    stylus: {
        use: [poststylus([require('autoprefixer')])]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '电子商务在线考试系统',
            inject: 'body',
            template: 'src/template.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors.[hash].js'),
        new ExtractTextPlugin('app.css', {
            disable: false,
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl']
    }
}

module.exports = config
