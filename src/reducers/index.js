/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import global from './global'
import exam from '../pages/exam/reducer'

const rootReducer = combineReducers({
    routing: routerReducer,
    global,
    exam
})

export default rootReducer

