/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/5
 */
import Auth from './auth.component'
import Login from './login.component'


// const route = [{
//     path: 'auth/signup',
//     getComponent(nextState, cb) {
//         require.ensure([], require => {
//             cb(null, require('./component').default)
//         })
//     }
// }, {
//     path: 'auth/login',
//     getComponent(nextState, cb) {
//         require.ensure([], require => {
//             cb(null, require('./login.component').default)
//         })
//     }
// }]

const route = {
    path: 'auth',
    component: Auth,
    indexRoute: { component: Login},
    childRoutes: [{
        path: 'login',
        component: Login
    }, {
        path: 'signup',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./signup.component').default)
            })
        }
    }]
}

export default route


