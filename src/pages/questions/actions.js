import { QUESTIONS_GOT } from './constants'
export function addQuestion(data) {
    let formdata = new FormData()
    Object.keys().forEach(item => {
        formdata.append(item, data[item])
    })
    return dispatch => {
        return fetch('/api/questions', {
            method: 'POST',
            body: formdata
        })
    }
}

export function getQuestions() {
    return dispatch => {
        return fetch('/api/questions').then(res => res.json())
            .then(res => {
                dispatch({ type: QUESTIONS_GOT, questions: res })
                return res
            })
    }
}
