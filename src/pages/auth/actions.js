/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/28
 */

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
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                dispatch(loginSuccess(res))
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
    return dispatch => {
        return fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
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
