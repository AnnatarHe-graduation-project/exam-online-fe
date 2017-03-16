/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/28
 */
import { push } from 'react-router-redux'
import { getRole } from '../../utils/model'
import { setProfile } from '../public/actions/profile'

const mockResponseProfile = {
    "data": {
        "CreatedAt": "2017-01-01T10:39:07.187649Z",
        "DeletedAt": null,
        "ID": 13,
        "UpdatedAt": "2017-01-01T10:39:07.187649Z",
        "avatar": "",
        "name": "AnnatarHe",
        "news": null,
        "paperDone": "[{\"0\":0}]",
        "papers": null,
        "pwd": "aaa",
        "role": 11,
        "schoolId": "01111111"
    },
    "err": "",
    "status": 200
}

import {
    DO_LOGOUT,
    DO_SIGNUP,
    DO_LOGIN,
    DO_FAIL,
    DO_FAIL_RESET
} from './constants'

const loginSuccess = profile => {
    return {
        type: DO_LOGIN,
        profile
    }
}

const loginFail = err => {
    return {
        type: DO_FAIL,
        err
    }
}

/**
 * 登陆操作！
 * @param data
 * @returns {function(*)}
 */
export const requestLogin = data => {
    return dispatch => {
        return fetch('/api/auth/login', {
            method: 'POST',
            // 允许302
            credentials: 'include',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                const newData = Object.assign({}, res.data, {
                    paperDone: res.data.paperDone === null ? [] : res.data.paperDone,
                    news: res.data.news === null ? [] : res.data.news,
                    papers: res.data.papers === null ? [] : res.data.papers
                })
                return Object.assign({}, res, {
                    data: newData
                })
            })
            .then(res => {
                dispatch(loginSuccess(res))
                dispatch(setProfile(res.data))
                // redirect to dashboard
                dispatch(push('/dashboard/' + getRole(res.data.role, true)))
            })
            .catch(err => {
                dispatch(loginFail(err))
            })
    }
}

// --------------------------------------------------- signup ----------------------------------------------------------

const signupSuccess = profile => {
    return {
        type: DO_SIGNUP,
        profile
    }
}

const signupFail = err => {
    return {
        type: DO_FAIL,
        err
    }
}


export const requestSignup = data => {
    let form = new FormData()
    Object.keys(data).forEach(item => {
        form.append(item, data[item])
    })
    return dispatch => {
        return fetch('/api/auth/register', {
            method: 'POST',
            body: form
        })
            .then(res => res.json())
            .then(res => {
                dispatch(push('/auth/login'))
                dispatch(signupSuccess(res))
            })
            .catch(err => {
                dispatch(signupFail(err))
            })
    }
}

// --------------------------------- reset error --------------------------------

export const resetError = () => {
    return {
        type: DO_FAIL_RESET
    }
}
