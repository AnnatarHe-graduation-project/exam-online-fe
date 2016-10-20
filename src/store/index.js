/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers/index'

const middlewares = process.env.NODE_ENV === 'production' ?
    [ thunk ] : [thunk, logger() ]

const store = createStore(reducers, {}, compose(applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f))

export default store

