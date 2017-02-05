/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.02.05
 */

import React from 'react'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import store from './store/index'
import routes from './route'

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => {
    return (
        <Provider store={store}>
            <Router
                history={browserHistory}
                routes={routes}
            />
        </Provider>
    )
}

export default Root
