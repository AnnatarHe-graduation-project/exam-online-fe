/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import store from './store/index'
import routes from './route'

const App = () => {
    return (
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>
    )
}

render(<App />, document.body.appendChild(document.createElement('div')))

