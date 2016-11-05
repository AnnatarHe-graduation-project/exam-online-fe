/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import global from './global'

const rootReducer = combineReducers({
    routing: routerReducer,
    global
})

export default rootReducer

