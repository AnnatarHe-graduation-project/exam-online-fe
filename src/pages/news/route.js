/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */


const route = [{
    path: 'news',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./news').default)
        })
    }
}, {
    path: 'news/:id',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./article').default)
        })
    }
}]

export default route
