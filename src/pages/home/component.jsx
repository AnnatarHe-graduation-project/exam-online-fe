/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../public/actions/profile'
import styles from './dashboard.css'

@connect(null, dispatch => ({
    getProfile() { dispatch(getProfile()) }
}))
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // 获取用户数据
        this.props.getProfile()
    }

    render() {
        return (
            <section className={styles.container}>
                {this.props.children}
            </section>
        )
    }
}

export default Dashboard


