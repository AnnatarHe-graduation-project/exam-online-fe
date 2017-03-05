/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017/1/1
 */

import {
    PROFILE_GOT
} from '../constants/profile'

export function setProfile(profile) {
    return {
        type: PROFILE_GOT,
        profile
    }
}

export function getProfile() {
    return dispatch => {
        return fetch('/api/profile/me')
            .then(res => res.json())
            .then(res => {
                if (res.status !== 200) {
                    return Promise.reject(res)
                }
                return res
            })
            .then(profile => {
                dispatch(setProfile(profile.data))
            })
            .catch(err => {
                console.error(err)
            })
    }
}

