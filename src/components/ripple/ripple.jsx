/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.11.06
 */

import React from 'react'
import { Link } from 'react-router'

class Ripple extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { to, text, className } = this.props
        return (
            <Link to={this.props.to} className={ className }>
                {this.props.text}
                <span className=""></span>
            </Link>
        )
    }
}

export default Ripple

