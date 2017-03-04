/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 26/02/2017
 */

import React from 'react'
import { connect } from 'react-redux'

import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'
import { getExams } from '../public/actions/exams'
import styles from './papers.css'

@connect(state => ({
    exams: state.exam.exams
}), dispatch => ({
    getExams() { dispatch(getExams()) }
}))
class Papers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getExams()
    }

    examRender() {
        return this.props.exams.map((exam, index) => {
            return (
                <Card
                    key={index}
                    to={'/exam/' + exam.id}
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
                <Cards>{this.examRender()}</Cards>
            </section>
        )
    }
}

export default Papers
