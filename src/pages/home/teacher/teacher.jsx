/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/12/4
 */

import React from 'react'
import { connect } from 'react-redux'
import Profile from '../../../components/profile/profile'
import changeTitleHOC from '../../../components/HOC/changeTitle'
import { LineCharts } from '../../../components/charts'

// import {} from 'recharts'

import styles from './teacher.css'

@changeTitleHOC(false)
@connect(state => ({
    profile: state.profile.profile
}))
class Teacher extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.changeTitle(this.props.profile.name)
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
                    <LineCharts
                        data={this.props.profile.paperDone}
                        width={500}
                        height={500}
                    />
                </section>
            </section>
        )
    }
}

export default Teacher
