/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Menu from '../../components/menu/menu'

import '../../styles/index'
import styles from './root.css'

const mapStateToProps = (state) => {
    return {
        menu: state.global.menu
    }
}

@connect(mapStateToProps)
class Root extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, location, menu } = this.props
        return (
            <section className={styles.body}>
                <ReactCSSTransitionGroup
                    className={styles.menu}
                    component="div"
                    transitionName="menu"
                >
                    { menu ? <Menu /> : null }
                </ReactCSSTransitionGroup>
                <section className={styles.container}>
                    <Header />
                    <ReactCSSTransitionGroup
                        className={styles.content}
                        component="div"
                        transitionName="fade"
                    >
                        {React.cloneElement(children, {
                            key: location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                    <Footer />
                </section>
            </section>
        )
    }
}

export default Root

