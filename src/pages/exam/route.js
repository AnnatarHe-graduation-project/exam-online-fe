/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import Container from './component'
import Welcome from './welcome'

const route = {
    path: '/exam/:id',
    component: Container,
    indexRoute: { component: Welcome },
    childRoutes: [
        { path: 'welcome', component: Welcome }
    ]
}

export default route
