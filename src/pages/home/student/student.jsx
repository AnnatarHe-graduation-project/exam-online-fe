/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/12/4
 */

import React from 'react'
import { connect } from 'react-redux'
import {
    Radar, RadarChart, PolarGrid, Legend,
    Tooltip, PolarAngleAxis, PolarRadiusAxis
} from 'recharts'
import Profile from '../../../components/profile/profile'
import AddButton from '../../../components/add/add'
import NewsTable from '../../../components/news/news'
import styles from './student.css'

@connect(state => ({
    profile: state.profile.profile
}))
class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paperMap: []
        }
    }

    componentWillReceiveProps(np) {
        if (np.profile.paperDone.length > 0) {
            const paperMap = np.profile.paperDone.map(item => {
                const name = item.paper.title
                const score = item.score
                return { name, score }
            })
            this.setState({ paperMap })

        }
    }

    render() {
        return (
            <section className={styles.container}>
                <section>
                    <Profile
                        name={this.props.profile.name}
                        avatar={this.props.profile.avatar}
                        paperCount={this.props.profile.paperDone.length}
                        newsCount={this.props.profile.news.length}
                        role={this.props.profile.name}
                    />
                </section>
                <section className={styles.content}>
                    <div className={styles.avgScores}>
                        <h2 className={styles.head}>平均考试成绩</h2>
                        <RadarChart
                            cx={300}
                            cy={250}
                            outerRadius={150}
                            width={500}
                            height={400}
                            data={this.state.paperMap}
                        >
                            <Radar
                                name={this.props.profile.name}
                                dataKey="score"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.6}
                            />
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <Legend />
                            <Tooltip />
                            <PolarRadiusAxis />
                        </RadarChart>
                    </div>
                    <hr className={styles.divider} />
                    <NewsTable news={this.props.profile.news} />
                </section>
                <AddButton to="/news/add" />
            </section>
        )
    }
}

export default Student
