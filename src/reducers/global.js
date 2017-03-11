/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */
import { COURSES_GOT } from '../pages/public/constants/course'

import {
    MENU_TOGGLE,
    CHANGE_TITLE
} from '../constants/menu'

const init = {
    courses: [],
    menu: false,
    title: '首页'
}

const global = (state = init, action) => {
    switch (action.type) {
        case COURSES_GOT:
            return Object.assign({}, state, {
                courses: action.courses
            })
        case MENU_TOGGLE:
            return Object.assign({}, state, {
                menu: ! state.menu
            })
        case CHANGE_TITLE:
            return Object.assign({}, state, {
                title: action.title
            })
        default:
            return state
    }
}

export default global

