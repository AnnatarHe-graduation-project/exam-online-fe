/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import { connect } from 'react-redux'

import Wrap from './wrap'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import { getExams } from '../public/actions/exams'
import styles from './index.css'

@connect(state => ({
    exams: state.exam.exams
}), dispatch => ({
    getExams() { dispatch(getExams()) }
}))
class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getExams()
    }

    examRender() {
        return this.props.exams.slice(0, 6).map((exam, index) => {
            return (
                <Card
                    key={index}
                    to={'/exam/' + exam.ID}
                    title={exam.title}
                    desc={exam.desc}
                    image={exam.image}
                />
            )
        })
    }

    render() {
        return (
            <section className={styles.container}>
                <Wrap to="/exams" hero="从这里开始，进阶真正的学霸" />
                <Cards>
                    {this.examRender()}
                </Cards>
            </section>
        )
    }
}

export default Index


