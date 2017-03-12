/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 26/02/2017
 */

import { GOT_EXAMS } from '../constants/exams'

export const getExams = () => {
    return dispatch => {
        return fetch('/api/exams/list')
            .then(res => res.json())
            .then(res => res.data)
            .then(exams => {
                dispatch({ type: GOT_EXAMS, exams })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
