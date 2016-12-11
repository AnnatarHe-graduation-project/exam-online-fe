/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.11
 */

const webpack = require('webpack')
const path = require('path')

const vendors = [
    'react',
    'whatwg-fetch',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'redux-thunk'
]

const config = {
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '..', 'dist', 'manifest.json'),
            name: '[name]',
            context: __dirname
        })
    ]
}

module.exports = config

