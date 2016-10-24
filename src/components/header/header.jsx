/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import React from 'react'
import { connect } from 'react-redux'
import HeaderNavs from './navs'

import {
    menuToggle
} from '../../actions/menu'

import styles from './header.css'

@connect()
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.props.dispatch(menuToggle())
    }

    render() {
        return (
            <header className={styles.header}>
                <section className={styles.left} onClick={this.toggleMenu}>
                    <div className={styles.icon}>
                        <i className="fa fa-bars fa-lg"></i>
                    </div>
                    <h3 className={styles.head}>Settings</h3>
                </section>

                <HeaderNavs />
            </header>
        )
    }
}

export default Header

