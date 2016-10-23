/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import {
    MENU_TOGGLE
} from '../constants/menu'

const init = {
    menu: false
}

const global = (state = init, action) => {
    switch (action.type) {
        case MENU_TOGGLE:
            return Object.assign({}, state, {
                menu: ! state.menu
            })
        default:
            return state
    }
}

export default global

