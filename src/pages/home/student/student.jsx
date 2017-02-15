/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/12/4
 */

import React from 'react'
import { connect } from 'react-redux'
import Profile from '../../../components/profile/profile'

@connect(state => ({
    profile: state.profile.profile
}))
class Student extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <Profile
                    name={this.props.profile.name}
                    avatar={this.props.profile.avatar}
                    paperCount={this.props.profile.paperDone.length}
                    newsCount={this.props.profile.news.length}
                    role={this.props.profile.name}
                />
            </section>
        )
    }
}

export default Student
