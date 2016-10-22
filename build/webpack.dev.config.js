/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

const config = require('./webpack.base.config')

config.devtool = 'eval'

config.devServer = {
    hot: true,
    inline: true,
    proxy: {
        '/api/*': {
            target: 'http://127.0.0.1:9999',
            secure: false
        }
    }
}

module.exports = config

