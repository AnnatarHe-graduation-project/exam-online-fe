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
    Upload, Icon, message, Alert, Modal,
    Table
} from 'antd'
import RichTextEditor from 'react-rte'
import { getCourses } from '../public/actions/course'
import { addQuestion } from './actions'
import styles from './add.css'

const formItemLayout =  {
    labelCol: {span: 4},
    wrapperCol: {span: 20}
}

const columns = [{
    title: '标题',
    dataIndex: 'title',
    key: 'title'
}, {
    title: '内容',
    dataIndex: 'content',
    key: 'content'
}, {
    title: '答案',
    dataIndex: 'answers',
    key: 'answers'
}, {
    title: '正确答案',
    dataIndex: 'correct',
    key: 'correct'
}, {
    title: '得分',
    dataIndex: 'score',
    key: 'score'
}, {
    title: '学科',
    dataIndex: 'course',
    key: 'course'
}]

const dataSource = [{
    key: 1,
    title: '美国独立战争因何而起?',
    content: '请在下列选项中选出美国独立战争爆发的其中一个原因',
    answers: '["保卫钓鱼岛", "反对萨德导弹部署", "黑人平权", "捍卫同性恋的权利"]',
    correct: '[2]',
    score: '5',
    course: '美国历史'
}]


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
            adding: false,
            modalOpen: false
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
        }).then(() => {
            message.success('添加成功')
        }).catch(e => {
            message.error('插入失败，请检查网络')
            console.error(e)
        }).then(() => { this.setState({ loading: false })})

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

    toggleModal = e => {
        this.setState(s => ({ modalOpen: ! s.modalOpen }))
    }

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.excelContainer}>
                    <Upload.Dragger
                        name='excel'
                        showUploadList={false}
                        action="/api/question/excel"
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
                    <Alert
                        message="文件类型警告！"
                        description={<span>请务必按照约定的格式上传正确的Excel文件，否则不能正确解析, <Button onClick={this.toggleModal}>打开连接查看格式</Button></span>}
                        type="warning"
                        showIcon
                    />
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
                <Modal
                    title="Excel录入题目文件格式说明"
                    visible={this.state.modalOpen}
                    onOk={this.toggleModal}
                    onCancel={this.toggleModal}
                >
                    <p>请使用Office 2010以上版本的Excel进行编辑</p>
                    <p>每一行为一道题目</p>
                    <p>第一列为题目标题</p>
                    <p>第二列为题目内容</p>
                    <p>第三列为题目答案，JSON数组格式</p>
                    <p>第四列为题目正确答案的索引值, JSON数组格式</p>
                    <p>第五列为题目分值，答对此题可获得多少分数</p>
                    <p>第六列为题目科目名称，从属于哪个科目</p>
                    <Table dataSource={dataSource} columns={columns} />
                    <img src={require('../../images/schema.png')} className={styles.schema} />
                </Modal>
            </section>
        )
    }
}

export default AddQuestion

