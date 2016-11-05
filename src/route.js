/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import Root from './pages/root/component'
import Index from './pages/index/component'

const route = {
    path: '/',
    component: Root,
    indexRoute: { component: Index },
    childRoutes: [
        { path: '/index', component: Index},
        require('./pages/home/route').default,
        require('./pages/auth/route').default
    ]
}

export default route

