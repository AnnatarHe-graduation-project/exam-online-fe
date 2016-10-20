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

const config = {
    entry: {
        index: './src/index.jsx'
    },
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
            loader: ExtractTextPlugin.extract('style', 'css-loader?modules')
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
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
