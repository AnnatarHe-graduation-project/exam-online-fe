/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/5
 */

import React from 'react'
import Ripple from '../../components/ripple/ripple'

import styles from './auth.css'

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={ styles.container }>
                <div className={ styles.content }>
                    <div className={ styles.header }>
                        header
                    </div>
                    <div className={ styles.body }>
                        <Ripple
                            to="/auth"
                            text="dddddd"
                            className={ styles.link }
                        >
                        </Ripple>
                    </div>
                    <div className={ styles.footer }>
                        footer
                    </div>
                </div>
            </section>
        )
    }
}


export default Auth

