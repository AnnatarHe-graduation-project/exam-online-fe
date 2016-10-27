/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.27
 */

import React from 'react'
import { Link } from 'react-router'

import styles from './card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.card}>
                <Link to={this.props.to}>
                    <img src={this.props.image} className={styles.image}/>
                    <div className={styles.content}>
                        <h5 className={styles.title}>{this.props.title}</h5>
                        <span className={styles.desc}>{this.props.desc}</span>
                    </div>
                </Link>
            </div>
        )
    }
}

Card.propTypes = {
    title: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string,
    image: React.PropTypes.string.isRequired,
}

export default Card

