/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

import React from 'react'

import styles from './footer.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <span>&copy; AnnatarHe</span>
            </div>
            <div className={styles.addr}>
                <span>13 · 电子商务</span>
            </div>
        </footer>
    )
}

export default Footer

