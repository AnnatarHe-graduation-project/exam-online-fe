/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.27
 */

import React from 'react'
import { Link } from 'react-router'
import changeTitleHOC from '../../components/HOC/changeTitle'

import styles from './wrap.css'

@changeTitleHOC()
class Wrap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.changeTitle('首页')
    }

    render() {
        const { to, hero } = this.props
        return (
            <section className={styles.wrap}>
                <h1 className={styles.hero}>{hero}</h1>
                <Link to={to} className={styles.start}>开始练习</Link>
            </section>
        )
    }
}

Wrap.propTypes = {
    to: React.PropTypes.string.isRequired,
    hero: React.PropTypes.string.isRequired
}

export default Wrap

