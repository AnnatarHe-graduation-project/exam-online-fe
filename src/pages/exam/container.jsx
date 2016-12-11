/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import React from 'react'
import { connect } from 'react-redux'
import {
    fetchPaper
} from './actions'

import styles from './container.css'

@connect()
class Exam extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(fetchPaper(this.props.params.id))
    }

    render() {
        return (
            <section className={styles.container} >
                { this.props.children }
            </section>
        )
    }
}

export default Exam

