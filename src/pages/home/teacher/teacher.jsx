/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/12/4
 */

import React from 'react'
import { connect } from 'react-redux'
import Profile from '../../../components/profile/profile'
// import {} from 'recharts'

import styles from './teacher.css'

@connect(state => ({
    profile: state.profile.profile
}))
class Teacher extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className={styles.container}>
                <Profile
                    name={this.props.profile.name}
                    avatar={this.props.profile.avatar}
                    paperCount={this.props.profile.paperDone.length}
                    newsCount={this.props.profile.news.length}
                    role={this.props.profile.role}
                />
                <section className={styles.content}>
                    content here
                </section>
            </section>
        )
    }
}

export default Teacher
