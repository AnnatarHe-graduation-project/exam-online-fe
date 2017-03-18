/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.18
 */

export const addCourse = data => {
    const fd = new FormData()
    Object.keys(data).forEach(item => {
        fd.append(item, data[item])
    })
    return dispatch => {
        return fetch('/api/courses', {
            method: 'POST',
            body: fd
        }).then(res => res.json())
    }
}
