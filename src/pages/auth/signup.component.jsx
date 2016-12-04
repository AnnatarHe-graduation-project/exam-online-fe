/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/11/5
 */

import React from 'react'
import Switch from '../../components/switch/switch'
import styles from './login.css'

class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            pwd: '',
            type: true
        }
        this.doSignup = this.doSignup.bind(this)
        this.selectType = this.selectType.bind(this)
    }

    selectType() {
        this.setState({
            type: ! this.state.type
        })
    }

    doSignup(e) {
        e.preventDefault()
    }

    render() {
        return (
            <section className={styles.loginContainer}>
                <form onSubmit={this.doSignup} className={`form-container`}>
                    <div className="form-group">
                        <input className="form-control" type="text" value={this.state.id} placeholder="学号/教师号"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" value={this.state.pwd} placeholder="密码"/>
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

