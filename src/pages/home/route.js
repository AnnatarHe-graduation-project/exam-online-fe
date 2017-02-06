/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import Dashboard from './component'
import StudentDashboard from './student/student'

const route = [{
    path: 'dashboard',
    component: Dashboard,
    indexRoute: {component: StudentDashboard},
    childRoutes: [
        { path: 'student', component: StudentDashboard },
        { path: 'teacher', getComponent(nextState, cb) {
            import('./teacher/teacher')
                .then(mod => cb(null, mod.default))
                .catch(err => console.error(err))
        }}
    ]
}]

export default route

