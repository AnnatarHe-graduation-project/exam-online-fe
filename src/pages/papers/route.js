/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 26/02/2017
 */

const routes = [{
    path: 'exams',
    getComponents(nextState, cb) {
        import('./component').then(mod => cb(null, mod.default)).catch(err => console.error(err))
    }
}]

export default routes
