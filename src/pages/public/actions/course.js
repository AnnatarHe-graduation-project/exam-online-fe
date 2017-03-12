import { COURSES_GOT } from '../constants/course'

export function getCourses() {
    return dispatch => {
        return fetch('/api/courses').then(res => res.json())
            .then(res => {
                dispatch({
                    type: COURSES_GOT,
                    courses: res.data
                })
                return res
            })
    }
}
