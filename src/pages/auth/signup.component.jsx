/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/5
 */

import React from 'react'
import { connect } from 'react-redux'
import Switch from '../../components/switch/switch'
import styles from './login.css'
import changeTitleHOC from '../../components/HOC/changeTitle'
import {
    requestSignup
} from './actions'

@changeTitleHOC(true)
@connect()
class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            pwd: '',
            type: true
        }
        this.doSignup = this.doSignup.bind(this)
        this.selectType = this.selectType.bind(this)
    }

    componentDidMount() {
        this.props.changeTitle('注册')
    }

    selectType() {
        this.setState({
            type: ! this.state.type
        })
    }

    doSignup(e) {
        e.preventDefault()
        this.props.dispatch(requestSignup({
            username: this.state.name,
            pwd: this.state.pwd,
            school_id: this.state.id,
            role: this.state.type ? 'student' : 'teacher'
        }))
    }

    render() {
        return (
            <section className={styles.loginContainer}>
                <form onSubmit={this.doSignup} className={`form-container`}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.name}
                            onChange={e => this.setState({name: e.target.value.trim()})}
                            placeholder="用户名"/>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.id}
                            onChange={e => this.setState({id: e.target.value.trim()})}
                            placeholder="学号/教师号"/>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            value={this.state.pwd}
                            onChange={e => this.setState({pwd: e.target.value})}
                            placeholder="密码"/>
                    </div>
                    <div className="form-group form-center">
                        <Switch
                            pos={this.state.type}
                            desc={this.state.type ? '学生' : '教师'}
                            onChange={this.selectType} />
                    </div>
                    <div className="form-group form-center">
                        <button onSubmit={this.doSignup} type="submit" className="btn btn-submit btn-lg btn-radius"> 注册 </button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Signup

