/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'
import 'le-theme/dist/index.css'

const realRender = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.body.appendChild(document.createElement('div')))
}

realRender(Root)

if (module.hot) {
    module.hot.accept('./root', () => {
        realRender(Root)
    })
}

