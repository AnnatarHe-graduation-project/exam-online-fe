/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import React from 'react'
import { connect } from 'react-redux'
import {
    fetchPaper
} from './actions'
import FinishedExam from './finished'

@connect()
class Exam extends React.Component {
    constructor(props) {
        super(props)

        // id
        // this.props.params.id

        this.state ={
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchPaper(this.props.params.id))
    }


    render() {
        return (
            <section>
                examing
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Exam


