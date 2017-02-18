/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.02.19
 */

import React from 'react'
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip,
    Legend
} from 'recharts'

class LineCharts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <LineChart
                width={this.props.width}
                height={this.props.height}
                data={this.props.data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
            </LineChart>
        )
    }
}

LineCharts.propTypes = {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired
    // data: React.PropTypes.shape({
    // }).isRequired
}

export default LineCharts

