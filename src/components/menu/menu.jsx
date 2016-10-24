/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import React from 'react'
import { connect } from 'react-redux'
import {
    menuToggle
} from '../../actions/menu'
import Navs from './navs'

import styles from './menu.css'

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className={styles.container}>
                <section className={styles.logo}>
                    <h2>LOGO</h2>
                </section>
                <Navs />
            </nav>
        )
    }
}

export default Menu

