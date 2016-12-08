/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.08
 */

import React from 'react'
import { connect } from 'react-redux'

@connect(store => ({
    questions: store.exam.questions
}))
class Examing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.questions)
        return (
            <div>
                examing
            </div>
        )
    }
}

export default Examing

