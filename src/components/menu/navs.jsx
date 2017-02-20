/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.24
 */

import React from 'react'
import { Link } from 'react-router'

import styles from './navs.css'

class Navs extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            navs: [{
                to: '/',
                icon: 'home',
                text: '首页'
            }, {
                to: '/student/exam',
                icon: 'file-o',
                text: '考试'
            }, {
                to: '/student/profile',
                icon: 'user',
                text: '信息'
            }, {
                to: '/news',
                icon: 'external-link',
                text: '消息'
            }]
        }
    }

    mapLinks() {
        return this.state.navs.map((nav, index) => {
            const cn = `fa fa-lg fa-${nav.icon} ${styles.icon}`
            return (
                <li className={styles.navItem} key={index}>
                    <Link to={nav.to} className={styles.link} activeClassName={styles.choosed}>
                        <i className={cn}></i>
                        <span className={styles.text}>{nav.text}</span>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className={styles.navs}>
                {this.mapLinks()}
            </ul>
        )
    }
}

export default Navs

