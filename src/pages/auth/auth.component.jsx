/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/28
 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link } from 'react-router'
import { getRole } from '../../utils/model'

import styles from './auth.css'

@connect(state => ({
    profile: state.profile.profile
}), dispatch => ({
    goToTeacherDashboard() { dispatch(push('/dashboard/teacher'))},
    goToStudentDashboard() { dispatch(push('/dashboard/student'))}
}))
class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const role = getRole(this.props.profile.role)
        switch (role) {
            case 'teacher':
                this.props.goToTeacherDashboard()
                break
            case 'student':
                this.props.goToStudentDashboard()
                break
            default:
                break
        }
    }

    render() {
        const { location } = this.props
        return (
            <section className={ styles.container }>
                <div className={ styles.content }>
                    <header className={ styles.header }>
                        <h3>{location.pathname === '/auth/login' ? '登陆' : '注册'}</h3>
                        <Link to={`/auth/${location.pathname === '/auth/login' ? 'signup' : 'login'}`}
                              className={styles.toLogin}>
                            <span>去{location.pathname === '/auth/login' ? '注册' : '登陆'}</span>
                            &nbsp;
                            <i className="fa fa-lg fa-arrow-right"/>
                        </Link>
                    </header>
                    <div className={ styles.body }>
                        { this.props.children }
                    </div>
                    <footer className={ styles.footer }>

                    </footer>
                </div>
            </section>
        )
    }
}

export default Auth
