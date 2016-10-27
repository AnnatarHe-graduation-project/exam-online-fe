/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.27
 */

import React from 'react'
import { Link } from 'react-router'

import styles from './wrap.css'

const Wrap = ({ to, hero }) => {
    return (
        <section className={styles.wrap}>
            <h1 className={styles.hero}>{hero}</h1>
            <Link to={to} className={styles.start}>开始练习</Link>
        </section>
    )
}

Wrap.propTypes = {
    to: React.PropTypes.string.isRequired,
    hero: React.PropTypes.string.isRequired
}

export default Wrap

