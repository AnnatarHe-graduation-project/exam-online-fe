/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

const route = {
    path: 'dashboard',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./component').default)
        })
    }
}

export default route

