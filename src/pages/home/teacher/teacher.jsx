/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/12/4
 */

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'le-theme'
import NewsTable from '../../../components/news/news'
import Profile from '../../../components/profile/profile'
import changeTitleHOC from '../../../components/HOC/changeTitle'
import {
    LineChart, Line,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'
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
                <section className={styles.profileContainer}>
                    <Profile
                        name={this.props.profile.name}
                        avatar={this.props.profile.avatar}
                        paperCount={this.props.profile.paperDone.length}
                        newsCount={this.props.profile.news.length}
                        role={this.props.profile.role}
                    />
                    <div className={styles.extra}>
                        <Button type="default">
                            <Link
                                className={styles.addPaper}
                                to="/paper/add"
                            >
                                编辑卷子
                            </Link>
                        </Button>
                        <Button type="info">
                            <Link
                                className={styles.addPaper}
                                to="/question/add"
                            >
                                编辑题目
                            </Link>
                        </Button>
                    </div>
                </section>
                <section className={styles.content}>
                    <div className={styles.avgScores}>
                        <h2 className={styles.head}>出卷平均分</h2>
                        <BarChart
                            width={500}
                            height={300}
                            data={this.props.profile.paperDone}
                            className={styles.charts}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="score" fill="#8884d8" />
                        </BarChart>
                    </div>
                    <hr className={styles.divider} />
                    <NewsTable news={this.props.profile.news} />
                </section>
            </section>
        )
    }
}

export default Teacher
