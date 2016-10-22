/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Menu from '../../components/menu/menu'

const Root = ({ children, location }) => {
    return (
        <section>
            <Header />
            <Menu />
            <section>
                <ReactCSSTransitionGroup
                    className="foo"
                    component="div"
                    transitionName="fade"
                >
                    {React.cloneElement(children, {
                        key: location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </section>
            <Footer />
        </section>
    )
}

export default Root

