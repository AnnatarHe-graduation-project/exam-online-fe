/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.05
 */

const route = [{
    path: '/questions/add',
    getComponent(ns, cb) {
        import('./add')
            .then(mod => mod.default)
            .then(mod => cb(null, mod))
            .catch(e => { console.error(e) })
    }
}]

export default route

