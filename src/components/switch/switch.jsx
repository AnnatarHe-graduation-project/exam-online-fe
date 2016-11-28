/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/28
 */

import React from 'react'
import styles from './switch.css'

const Switch = ({ pos, desc, onChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.barContainer} onClick={onChange}>
                <div className={styles.bar}></div>
                <div className={`${styles.pointer} ${pos ? styles.atLeft : styles.atRight}`}></div>
            </div>
            <div className={styles.display}>
                <span>{desc}</span>
            </div>
        </div>
    )
}

Switch.propTypes = {
    // false --- left
    // true ---- right
    pos: React.PropTypes.bool.isRequired,
    desc: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default Switch
