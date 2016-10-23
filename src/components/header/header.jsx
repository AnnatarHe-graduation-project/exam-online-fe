/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import React from 'react'
import { Link } from 'react-router'
import styles from './header.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.left}>
                <div className={styles.icon}>
                    <i className="fa fa-bars fa-lg"></i>
                </div>
                <h3 className={styles.head}>Settings</h3>
            </section>
            <ul className={styles.right}>
                <li className={styles.links}>
                    <Link to="/" className={styles.go}>
                        <i className="fa fa-search fa-lg"></i>
                    </Link>
                </li>
                <li className={styles.links}>
                    <Link to="/" className={styles.go}>
                        <i className="fa fa-comment-o fa-lg"></i>
                    </Link>
                </li>
                <li className={styles.links}>
                    <Link to="/" className={styles.go}>
                        <i className="fa fa-paper-plane-o fa-lg"></i>
                    </Link>
                </li>
                <li className={styles.links}>
                    <Link to="/" className={styles.go}>
                        <i className="fa fa-user fa-lg"></i>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

