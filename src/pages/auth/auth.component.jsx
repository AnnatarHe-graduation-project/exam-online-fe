/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/28
 */

import React from 'react'
import { Link } from 'react-router'

import styles from './auth.css'
const Auth = ({ children, location }) => {
    return (
        <section className={ styles.container }>
            <div className={ styles.content }>
                <header className={ styles.header }>
                    <h3>{location.pathname === '/auth/login' ? '登陆' : '注册'}</h3>
                    <Link to={`/auth/${location.pathname === '/auth/login' ? 'signup' : 'login'}`} className={styles.toLogin}>
                        <span>去{location.pathname === '/auth/login' ? '注册' : '登陆'}</span>
                        &nbsp;
                        <i className="fa fa-lg fa-arrow-right"></i>
                    </Link>
                </header>
                <div className={ styles.body }>
                    { children }
                </div>
                <footer className={ styles.footer }>

                </footer>
            </div>
        </section>
    )
}

export default Auth
