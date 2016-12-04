/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.20
 */

import React from 'react'
import styles from './dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={styles.container}>
                dashboard
                {this.props.children}
            </section>
        )
    }
}

export default Dashboard


