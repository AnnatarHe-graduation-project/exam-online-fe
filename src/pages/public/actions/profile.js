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

