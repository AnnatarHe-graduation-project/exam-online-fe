/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/5
 */

const route = {
    path: 'auth',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./component').default)
        })
    }
}

export default route


