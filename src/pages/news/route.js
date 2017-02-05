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
            require.ensure([], require => {
                cb(null, require('./article').default)
            })
        }
    }]
}]

export default route
