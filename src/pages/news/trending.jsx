/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */

import React from 'react'
import { Link } from 'react-router'
import styles from './trending.css'

const Trending = ({ lists }) => {
    return (
        <ol className={styles.container}>
            { lists.slice(0, 10).map((list, index) => {
                return (
                    <li className={styles.liItem} key={index}>
                        <Link className={styles.linkItem} to={`/news/${list.ID}`}>
                            { list.title }
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}

Trending.PropTypes = {
    lists: React.PropTypes.arrayOf({
        ID: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired
    }).isRequired
}

export default Trending
