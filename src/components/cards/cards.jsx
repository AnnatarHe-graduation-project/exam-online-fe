/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.27
 */

import React from 'react'
import styles from './cards.css'

const Cards = ({ children }) => {
    return (
        <section className={styles.cards}>
            {children}
        </section>
    )
}

export default Cards

