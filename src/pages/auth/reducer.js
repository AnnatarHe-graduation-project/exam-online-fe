/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/12/4
 */

import {
    USER_NOT_LOGGED,
    USER_LOGGED_AS_STUDENT,
    USER_LOGGED_AS_TEACHER,
    DO_FAIL_RESET,
    DO_FAIL,
    DO_LOGIN,
    DO_LOGOUT,
    DO_SIGNUP
} from './constants'

const initialData = {
    user: {},
    status: USER_NOT_LOGGED,
    err: ''
}

const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case DO_LOGIN:
            return Object.assign({}, state, action.profile)
        case DO_SIGNUP:
            return Object.assign({}, state, action.profile)
        case DO_LOGOUT:
            return Object.assign({}, state, {
                user: {},
                status: USER_NOT_LOGGED
            })
        case DO_FAIL:
            return Object.assign({}, state, {
                err: action.err
            })
        case DO_FAIL_RESET:
            return Object.assign({}, state, {
                err: ''
            })
        default:
            return state
    }
}

export default authReducer
