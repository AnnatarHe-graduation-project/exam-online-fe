/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import React from 'react'
import styles from './finished.css'

const status = [
    'great',
    'better',
    'good',
    'notGood',
    'zero'
]

const getStatusClassNameIndex = score => {
    if (score > 90) {
        return 0
    }
    if (score > 75) {
        return 1
    }
    if (score > 60) {
        return 2
    }
    if (score > 30) {
        return 3
    }
    return 4
}

const FinishedExam = ({ location }) => {
    const score = location.query.score
    const statusImg = getStatusClassNameIndex(score)
    return (
        <div className={styles.container}>
            <div className={styles[status[statusImg]]}></div>
            <span>你得了：<h1 className={styles.score}>{score}</h1> 分</span>
        </div>
    )
}

export default FinishedExam

