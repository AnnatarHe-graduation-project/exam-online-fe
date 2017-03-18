/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.18
 */

import React from 'react'
import { connect } from 'react-redux'
import changeTitleHOC from '../../components/HOC/changeTitle'
import { addCourse } from './action'
import {
    Form, Input, Button, Icon, message
} from 'antd'
import styles from '../news/add.css'

const formItemLayout =  {
    labelCol: {span: 8},
    wrapperCol: {span: 16}
}

@changeTitleHOC(true)
@connect(null, dispatch => ({
    addCourse(data) { return dispatch(addCourse(data)) }
}))
class CourseAdd extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            desc: ''
        }
    }

    componentDidMount() {
        this.props.changeTitle('添加课程')
    }

    submit = e => {
        e.preventDefault()
        const { name, desc } = this.state
        if (name === '' || desc === '') {
            message.warning('请填入足够的信息')
            return
        }

        this.props.addCourse({ name, desc }).then(() => {
            message.success('添加课程成功咯')
            this.setState({ name: '', desc: ''})
        }).catch(e => {
            message.error('添加失败了，请检查网络')
            this.setState({ name: '', desc: ''})
        })
    }

    render() {
        return (
            <div className={styles.courseContainer}>
                <Form onSubmit={this.submit}>
                    <Form.Item label="课程名称" {...formItemLayout}>
                        <Input
                            type="text"
                            value={this.state.name}
                            placeholder="课程名称"
                            onChange={e => {this.setState({ name: e.target.value})}}
                        />
                    </Form.Item>
                    <Form.Item label="课程简介" {...formItemLayout}>
                        <Input
                            type="text"
                            value={this.state.desc}
                            placeholder="课程简介"
                            onChange={e => {this.setState({ desc: e.target.value})}}
                        />
                    </Form.Item>
                    <div className={styles.addButton}>
                        <Button
                            type="primary"
                            size="large"
                            loading={this.state.loading}
                            htmlType="submit"
                        >
                            添加
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default CourseAdd

