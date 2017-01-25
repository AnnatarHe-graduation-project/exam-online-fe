/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import Container from './container'
import Welcome from './welcome'

const route = [{
    path: '/exam/:id',
    component: Container,
    indexRoute: { component: Welcome },
    childRoutes: [
        { path: 'welcome', component: Welcome },
        { path: 'examing', getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./examing').default)
            })
        }},
        { path: 'finish', getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./finished').default)
            })
        }}
    ]
}]

export default route
