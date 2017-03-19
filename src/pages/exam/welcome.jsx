/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import Loading from '../../components/loading/loading'
import styles from './welcome.css'

@connect((store) => {
    const { title, alert, score, hero } = store.exam.paper
    return {
        loading: store.exam.loading,
        title,
        alert,
        score,
        hero,
        userRole: store.profile.profile.role
    }
}, dispatch => ({
    toLogin() { dispatch(push('/auth/login')) }
}))
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    loginHook = e => {
        if (this.props.userRole === -1) {
            e.preventDefault()
            this.props.toLogin()
        }
    }

    render() {
        if (this.props.loading) {
            return <Loading />
        }

        const { title, alert, score, hero } = this.props

        return (
            <div className={styles.welcome}>
                <div className={styles.heroContainer}>
                    <img src={hero} className={styles.hero} />
                </div>
                <div className={styles.content}>
                    <h3>{ title }</h3>
                    <p>{ alert }</p>
                    <span> 可获得学分: <strong className="notice">{ score }</strong></span>
                    <div className={styles.button}>
                        <Link
                            to={`/exam/${this.props.params.id}/examing`}
                            className="btn btn-lg btn-submit btn-center btn-radius"
                            onClick={this.loginHook}
                        >
                            现在开始测验 &nbsp;<i className="fa fa-arrow-right fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome

