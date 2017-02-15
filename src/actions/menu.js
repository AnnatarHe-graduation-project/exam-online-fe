/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.23
 */

import {
    MENU_TOGGLE,
    CHANGE_TITLE
} from '../constants/menu'

export const menuToggle = () => {
    return {
        type: MENU_TOGGLE
    }
}

export const changeTitle = title => {
    return { type: CHANGE_TITLE, title }
}
