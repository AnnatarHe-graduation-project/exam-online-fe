/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Root from './pages/root/root'
import store from './store/index'

const App = () => {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    )
}

render(<App />, document.body.appendChild(document.createElement('div')))

