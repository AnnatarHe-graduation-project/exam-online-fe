/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/28
 */

import React from 'react'
import Switch from '../../components/switch/switch'
import { connect } from 'react-redux'
import { message } from 'antd'
import {
    requestLogin
} from './actions'

import styles from './login.css'

import changeTitleHOC from '../../components/HOC/changeTitle'

@changeTitleHOC(true)
@connect()
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            pwd: '',
            // true: 学生
            // false: 教师
            type: true
        }

        this.doLogin = this.doLogin.bind(this)
        this.selectType = this.selectType.bind(this)
    }
    componentDidMount() {
        this.props.changeTitle('登陆')
    }

    selectType(v) {
        this.setState({
            type: ! this.state.type
        })
    }

    doLogin(e) {
        e.preventDefault()
        const { id, pwd } = this.state
        const requestData = {
            username: id,
            password: pwd
        }

        this.props.dispatch(requestLogin(requestData)).then(() => {
            message.success('登陆成功，正在跳转')
        }).catch(e => {
            message.error('用户名或密码错误，请重试')
        })
    }

    render() {
        return (
            <section className={styles.loginContainer}>
                <form onSubmit={this.doLogin} className={`form-container`}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.id}
                            onChange={e => this.setState({ id: e.target.value.trim()})}
                            placeholder="学号/教师号"/>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            value={this.state.pwd}
                            onChange={e => this.setState({ pwd: e.target.value.trim()})}
                            placeholder="密码"/>
                    </div>
                    {/*<div className="form-group form-center">
                        <Switch
                            pos={this.state.type}
                            desc={this.state.type ? '学生' : '教师'}
                            onChange={this.selectType} />
                    </div>*/}
                    <div className="form-group form-center">
                        <button onSubmit={this.doLogin} type="submit" className="btn btn-submit btn-lg btn-radius"> 登陆 </button>
                    </div>
                </form>
            </section>
        )
    }
}

export default Login
