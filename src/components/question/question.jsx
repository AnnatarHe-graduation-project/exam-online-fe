/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.11
 */

import React from 'react'
import { Switch } from 'antd'
import styles from './question.css'

const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']

class Question extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            active: -1
        }
    }

    // 如果选对了就返回分数，否则给零分
    sendScore(index, e) {
        return this.props.getScore(this.props.question.correct == index ? this.props.question.score : 0)
    }

    answersRender(answers) {
        // answers = JSON.parse(answers)
        if (answers.length === 2) {
            return (
                <div>
                    <Switch
                        checkedChildren={'✅ 对'}
                        unCheckedChildren={'❌ 错'}
                        onChange={checked => this.sendScore(checked ? 0 : 1)}
                    />
                </div>
            )
        }
        return answers.map((ans, index) => {
            // 这里强行绑定一个事件，重复浪费了。不过还好，只有四个
            // const sendScore = this.sendScore.bind(this, index)
            return (
                <li key={index}
                    className={styles.item +  (this.state.active === index ? (' ' + styles.active): '')}
                    onClick={e => {
                        this.setState({ active: index })
                        this.sendScore(index)
                    }}
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
                        <div dangerouslySetInnerHTML={{__html: question.content}}></div>
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

