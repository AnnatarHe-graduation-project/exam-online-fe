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
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: [path.resolve(__dirname, '..', 'node_modules')],
            use: ['babel-loader']
        }, {
            test: /.styl$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: [ 'css-loader', 'stylus-loader' ]
            })
        }, {
            test: /.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: [
                    'css-loader?modules=true&camelCase=true&localIdentName=[name]_[local]-[hash:base64]&sourceMap=true',
                    'postcss-loader'
                ]
            })
        }, {
            test: /.css$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader']
            })
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{loader: 'url-loader', options: {limit: 500, name: '[name]-[hash].[ext]'}}]
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/font-woff'}}]
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/font-woff'}}]
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/octet-stream'}}]
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: [{loader: 'file-loader'}]
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'image/svg+xml'}}]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '电子商务在线考试系统',
            inject: 'body',
            template: path.resolve(__dirname, '..', 'src', 'template.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].[hash:8].js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: 'app.[contenthash:8].css',
            disable: false,
            allChunks: true
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/manifest.json')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            stylus: {
                default: {
                    use: [poststylus([require('autoprefixer')])]
                }
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.styl']
    }
}

module.exports = config
