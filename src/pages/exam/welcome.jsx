/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import React from 'react'
import { connect } from 'react-redux'

@connect((store) => {
    return {
        title: store.exam.paper,
        alert: store.exam.alert,
        score: store.exam.score
    }
})
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                welcome
            </div>
        )
    }
}

export default Welcome

