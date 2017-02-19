/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.base.config')

config.entry.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
)

config.target = 'web'
config.devtool = '#inline-source-map'
config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
)

config.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, '..'),
    historyApiFallback: true,
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:9999',
            secure: false
        }
    }
}

module.exports = config

