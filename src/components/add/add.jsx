/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.12
 */

import React from 'react'
import { Link } from 'react-router'
import styles from './add.css'

const AddButton = ({ to }) => {
    return (
        <Link to={to} className={styles.container}>
            <i className="fa fa-2x fa-plus" />
        </Link>
    )
}

export default AddButton

