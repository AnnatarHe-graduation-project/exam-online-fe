/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'

import Wrap from './wrap'
import Cards from '../../components/cards/cards'
import Card from '../../components/card/card'

import styles from './index.css'

class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            exams: [{
                to: '/exam/pay',
                title: '电子支付',
                desc: '电子支付课程考试',
                image: '/assets/pay.jpg'
            }, {
                to: '/exam/git',
                title: 'Git',
                desc: '团队协作考试卷',
                image: '/assets/git.png'
            }]
        }
    }

    examRender() {
        return this.state.exams.map((exam, index) => {
            return (
                <Card
                    key={index}
                    to={exam.to}
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
                <Wrap to="/exam" hero="从这里开始，进阶真正的学霸" />
                <Cards>
                    {this.examRender()}
                </Cards>
            </section>
        )
    }
}

export default Index


