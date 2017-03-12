/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.12
 */

import React from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import changeTitleHOC from '../../components/HOC/changeTitle'
import {
    Select, Form, Input, Slider, Button,
    Upload, Icon, message
} from 'antd'
import RichTextEditor from 'react-rte'
import { getCourses } from '../public/actions/course'
import { addNews } from './actions'
import styles from './add.css'

const formItemLayout =  {
    labelCol: {span: 4},
    wrapperCol: {span: 20}
}

@changeTitleHOC(true)
@connect(state => ({
    courses: state.global.courses
}), dispatch => ({
    getCourses() { return dispatch(getCourses()) },
    addNews(data) { return dispatch(addNews(data)) }
}))
class NewsAdd extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: RichTextEditor.createEmptyValue(),
            bg: null,
            courses: -1,
            loading: false
        }
    }

    componentDidMount() {
        this.props.getCourses()
        this.props.changeTitle('添加新闻')
    }

    onSubmit = e => {
        e.preventDefault()

        const { title, bg, courses } = this.state
        const content = this.state.content.toString('html')
        if (
            title === '' ||
            (! bg) ||
            courses === -1 ||
            content === ''
        ) {
            message.error('请填写完整数据')
            return
        }

        this.setState({ loading: true })

        this.props.addNews({
            title, content, bg,
            courses
        }).catch(e => console.error(e))
            .then(() => { this.setState({ loading: false }) })
    }

    renderCourses() {
        return this.props.courses.map((course, index) => {
            return (
                <Select.Option key={index} value={course.ID}>{course.name}</Select.Option>
            )
        })
    }

    handleFile = e => {
        this.setState({ bg: e.target.files[0] })
    }

    render() {
        return (
            <section className={styles.container}>
                <Form layout="horizontal" onSubmit={this.onSubmit}>
                    <Form.Item label="标题" {...formItemLayout}>
                        <Input
                            type="text"
                            value={this.state.title}
                            placeholder="题目的标题"
                            onChange={e => {this.setState({ title: e.target.value})}}
                        />
                    </Form.Item>
                    <Form.Item label="内容" {...formItemLayout}>
                        <RichTextEditor
                            value={this.state.content}
                            onChange={v => this.setState({ content: v })}
                        />
                    </Form.Item>
                    <Form.Item label="背景图" {...formItemLayout}>
                        <input type="file" accept="image/*" onChange={this.handleFile} />
                    </Form.Item>
                    <Form.Item label="学科" {...formItemLayout}>
                        <Select
                            onChange={v => {this.setState({ courses: v})}}
                        >
                            {this.renderCourses()}
                        </Select>
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
            </section>
        )
    }
}

export default NewsAdd

