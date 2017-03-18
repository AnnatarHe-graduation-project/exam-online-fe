/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.18
 */

const route = [{
    path: 'courses/add',
    getComponent(ns, cb) {
        console.log(cb)
        import('./add').then(mod => mod.default).then(mod => cb(null, mod))
            .catch(err => console.error(err))
    }
}]

export default route


