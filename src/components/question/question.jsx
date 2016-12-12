/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.11
 */

import React from 'react'
import styles from './question.css'


const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']

class Question extends React.Component {
    constructor(props) {
        super(props)

    }

    // 如果选对了就返回分数，否则给零分
    sendScore(index, e) {
        return this.props.getScore(this.props.question.right === index ? this.props.question.score : 0)
    }

    answersRender(answers) {
        return answers.map((ans, index) => {
            // 这里强行绑定一个事件，重复浪费了。不过还好，只有四个
            const sendScore = this.sendScore.bind(this, index)
            return (
                <li key={ index }
                    className={ styles.item }
                    onClick={ sendScore }
                >{ `${options[index]}. ${ans}` }</li>
            )
        })
    }

    render() {
        const question = this.props.question
        return (
            <article className={ styles.container }>
                <div className={ styles.question }>
                    <div className={ styles.header }>
                        <h2>{ question.title }</h2>
                        <p>{ question.content }</p>
                    </div>
                    <ol className={ styles.list }>
                        { this.answersRender(question.answers) }
                    </ol>
                </div>
            </article>
        )
    }
}

Question.propTypes = {
    question: React.PropTypes.shape({
        title: React.PropTypes.string,
        content: React.PropTypes.string,
        right: React.PropTypes.number,
        score: React.PropTypes.number,
        answers: React.PropTypes.arrayOf(React.PropTypes.string)
    }).isRequired,
    getScore: React.PropTypes.func.isRequired
}

export default Question

