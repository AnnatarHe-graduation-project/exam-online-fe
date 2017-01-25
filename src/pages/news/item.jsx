/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */

import React from 'react'
import { Link } from 'react-router'
import styles from './item.css'

// article item.
const Item = ({ id, title, img}) => {
    return (
        <article className={styles.itemContainer}>
            <Link to={`/news/${id}`}>
                <img src={img} alt="article image" className={styles.image} />
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{ title }</h3>
                </div>
            </Link>
        </article>
    )
}

Item.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired
}

export default Item
