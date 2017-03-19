import { QUESTIONS_GOT } from './constants'
export function addQuestion(data) {
    let formdata = new FormData()
    Object.keys(data).forEach(item => {
        formdata.append(item, data[item])
    })
    return dispatch => {
        return fetch('/api/question/add', {
            method: 'POST',
            body: formdata,
            credentials: 'include'
        })
    }
}

export function getQuestions() {
    return dispatch => {
        return fetch('/api/question')
            .then(res => res.json())
            .then(res => {
                dispatch({ type: QUESTIONS_GOT, questions: res.data })
                return res
            })
    }
}
