/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.02.15
 */

import React from 'react'
import styles from './profile.css'

import { getRole } from '../../utils/model'

const Profile = ({ avatar, name, paperCount, newsCount, role }) => {
    const data = [
        { key: 'name', value: name },
        { key: 'paperCount', value: paperCount },
        { key: 'newsCount', value: newsCount },
        { key: 'role', value: getRole(~~role) }
    ]
    return (
        <aside className={styles.container}>
            <img src={avatar} className={styles.avatar} />
            <hr className={styles.hr} />
            <table className={styles.detail}>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </aside>
    )
}

Profile.propTypes = {
    avatar: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    paperCount: React.PropTypes.number.isRequired,
    newsCount: React.PropTypes.number.isRequired,
    role: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]).isRequired
}

export default Profile

