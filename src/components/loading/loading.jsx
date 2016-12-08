/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.08
 */

import React from 'react'
import styles from './loading.css'

const Loading = () => {
    return (
        <div className={styles.container}>
            <i className="fa fa-spinner fa-pulse fa-3x"></i>
            <span className={styles.text}> loading... </span>
        </div>
    )
}

export default Loading

