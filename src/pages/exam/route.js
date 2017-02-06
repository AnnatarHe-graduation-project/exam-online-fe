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
            import('./examing')
                .then(mod => cb(null, mod.default))
                .catch(err => console.error(err))
        }},
        { path: 'finish', getComponent(nextState, cb) {
            import('./finished')
                .then(mod => cb(null, mod.default))
                .catch(err => console.error(err))
        }}
    ]
}]

export default route
