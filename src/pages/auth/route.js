/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/5
 */
import Auth from './auth.component'
import Login from './login.component'

const route = [{
    path: 'auth',
    component: Auth,
    indexRoute: { component: Login},
    childRoutes: [{
        path: 'login',
        component: Login
    }, {
        path: 'signup',
        getComponent(nextState, cb) {
            import('./signup.component')
                .then(mod => cb(null, mod.default))
                .catch(err => console.error(err))
        }
    }]
}]

export default route


