/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.08
 */

import React from 'react'
import { connect } from 'react-redux'

import Question from '../../components/question/question'
import styles from './examing.css'

@connect(store => ({
    current: store.exam.current,
    questions: store.exam.questions
}))
class Examing extends React.Component {
    constructor(props) {
        super(props)
        this.getScore = this.getScore.bind(this)
    }

    // 得到的是成绩哦，不是选项
    getScore(score) {
        console.log(score)
    }


    questionRender() {
        const current = this.props.current
        const question = this.props.questions[current]
        return <Question
            question={ question }
            getScore={ this.getScore }
            />
    }

    render() {
        return (
            <section>
                { this.questionRender() }
            </section>
        )
    }
}

export default Examing

