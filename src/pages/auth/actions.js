/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/28
 */

const loginSuccess = profile => {
    return {
        type: 'constant',
        profile
    }
}

const loginFail = err => {
    return {
        type: 'constant',
        err
    }
}


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
