/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */

import NewsContainer from './newsContainer'
import News from './news'

const route = [{
    path: 'news',
    component: NewsContainer,
    indexRoute: { component: News },
    childRoutes: [{
        path: ':id',
        getComponent(nextState, cb) {
            import('./article').then(mod => cb(null, mod.default)).catch(err => console.error(err))
        }
    }]
}]

export default route
