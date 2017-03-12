/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.05
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
import { addQuestion } from './actions'
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
    addQuestion(data) { return dispatch(addQuestion(data)) }
}))
class AddQuestion extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            answers: fromJS(['']),
            correct: -1,
            score: -1,
            courses: -1,
            content: RichTextEditor.createEmptyValue(),
            adding: false
        }
    }

    componentDidMount() {
        this.props.getCourses()
        this.props.changeTitle('添加题目')
    }

    onSubmit = e => {
        e.preventDefault()
        const content = this.state.content.toString('html')
        const { title, correct, score, courses } = this.state

        if (title === '' || correct === -1 || score === -1 || courses === -1 || content === '') {
            console.log('error')
            message.error('请填写完整的题目信息')
            return
        }

        this.setState({ loading: true })
        this.props.addQuestion({
            title, content,
            correct, score,
            answers: JSON.stringify(this.state.answers.toJS()),
            courses
        }).catch(e => { console.error(e)})
            .then(() => { this.setState({ loading: false })})

        // 添加操作
    }

    renderCourses() {
        return this.props.courses.map((course, index) => {
            return (
                <Select.Option key={index} value={course.ID}>{course.name}</Select.Option>
            )
        })
    }

    renderAnswerInput() {
        return this.state.answers.toJS().map((ans, index) => {
            const onChange = e => {
                const v = e.target.value
                this.setState(s => ({
                    answers: s.answers.set(index, v)
                }))
            }
            return (
                <Input
                    key={index}
                    type="text"
                    value={this.state.answers.get(index)}
                    placeholder="答案"
                    onChange={onChange}
                />
            )
        })
    }

    addAnswer = () => {
        this.setState(s => ({
            answers: s.answers.push('')
        }))
    }

    renderAnswers() {
        return this.state.answers.toJS().map((ans, index) => {
            return (
                <Select.Option key={index} value={index}>{ans}</Select.Option>
            )
        })
    }

    uploadExcel(info) {
        const status = info.file.status
        if (status === 'done') {
            message.success('上传成功，服务端正在解析文件，稍后即可查看')
        } else if (status === 'error') {
            message.error('上传失败，您可能需要检查您上传文件的数据格式')
        }
    }

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.excelContainer}>
                    <Upload.Dragger
                        name='Excel文件'
                        showUploadList={false}
                        action="/api/question/add"
                        onChange={this.uploadExcel}
                    >
                        <div className={styles.draggerContainer}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">请点击上传Excel的试题文件</p>
                            <p className="ant-upload-hint"></p>
                        </div>
                    </Upload.Dragger>
                </div>
                <hr className={styles.hr} />
                <div className={styles.formContainer}>
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
                        <Form.Item label="答案" {...formItemLayout}>
                            {this.renderAnswerInput()}
                            <Button icon="plus-circle-o" onClick={this.addAnswer}>添加答案</Button>
                        </Form.Item>
                        <Form.Item label="正解" {...formItemLayout}>
                            <Select
                                onChange={v => {this.setState({ correct: v})}}
                            >
                                {this.renderAnswers()}
                            </Select>
                        </Form.Item>
                        <Form.Item label="得分" {...formItemLayout}>
                            <Slider
                                min={0}
                                max={10}
                                onChange={v => this.setState({ score: v})}
                            />
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
                                loading={this.state.adding}
                                htmlType="submit"
                            >
                                添加
                            </Button>
                        </div>
                    </Form>
                </div>
            </section>
        )
    }
}

export default AddQuestion

