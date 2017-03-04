/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.24
 */

import React from 'react'
import { Link } from 'react-router'

import styles from './navs.css'

class HeaderNavs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navs: [{
                icon: 'search',
                to: '/'
            }, {
                icon: 'comment-o',
                to: '/'
            }, {
                icon: 'paper-plane-o',
                to: '/'
            }, {
                icon: 'user',
                to: '/auth/login'
            }]
        }
    }

    navRender() {
        return this.state.navs.map((nav, index) => {
            const cn = `fa fa-lg fa-${nav.icon}`
            return (
                <li className={styles.links} key={index}>
                    <Link to={nav.to} className={styles.go} activeClassName={styles.active}>
                        <i className={cn}></i>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className={styles.right}>
                {this.navRender()}
            </ul>
        )
    }
}

export default HeaderNavs

