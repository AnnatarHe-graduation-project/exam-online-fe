/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017/1/1
 */
import {
    PROFILE_GOT
} from '../public/constants/profile'

const init = {
    profile: {
        name: '',
        schoolId: '',
        avatar: '',
        role: -1,
        news: [],
        paperDone: [],
        CreatedAt: ''
    }
}

const profileReducer = (state = init, action) => {
    switch (action.type) {
        case PROFILE_GOT:
            return Object.assign({}, state, {
                profile: action.profile
            })
        default:
            return state
    }
}

export default profileReducer
