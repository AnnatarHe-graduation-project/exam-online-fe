/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.27
 */

import React from 'react'
import styles from './cards.css'

const Cards = ({ children, className }) => {
    const cls = className ? styles.cards + ' ' + className : styles.cards
    return (
        <section className={cls}>
            {children}
        </section>
    )
}

export default Cards

