/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import Root from './pages/root/component'
import Index from './pages/index/component'

const getRoute = component => require(`./pages/${component}/route`).default

const route = {
    path: '/',
    component: Root,
    indexRoute: { component: Index },
    childRoutes: [
        { path: '/index', component: Index},
        ...getRoute('home'),
        ...getRoute('auth'),
        ...getRoute('exam'),
        ...getRoute('news'),
        ...getRoute('papers'),
        ...getRoute('questions'),
        ...getRoute('course')
    ]
}

export default route

