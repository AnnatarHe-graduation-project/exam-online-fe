/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.05
 */

import React from 'react'
import { Button } from 'le-theme'
import styles from './add.css'

class AddQuestion extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <div className={styles.excelContainer}>
                    <Button type="error" size="large" radius="radius">使用Excel加载数据</Button>
                </div>
                <hr />
            </section>
        )
    }
}

export default AddQuestion

