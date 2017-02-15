import React from 'react'
import { connect } from 'react-redux'
import { changeTitle } from '../../actions/menu'

const changeTitleHOC = (isContainer = false) => Component => {
    @connect(null, dispatch => ({
        changeTitle(title) { dispatch(changeTitle(title)) }
    }))
    class ChangeTitleComponent extends React.PureComponent {
        render() {
            const { ...others } = this.props
            return (
                <Component
                    changeTitle={this.props.changeTitle}
                    { ...others }
                >
                    { isContainer ? this.props.children : null }
                </Component>
            )
        }
    }

    return ChangeTitleComponent
}

export default changeTitleHOC
