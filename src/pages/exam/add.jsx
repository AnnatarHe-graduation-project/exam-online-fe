/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.05
 */

import React from 'react'
import { connect } from 'react-redux'
import { fromJS, is } from 'immutable'
import { getQuestions } from '../questions/actions'
import { getCourses } from '../public/actions/course'
import { addPaper } from './actions'
import {
    Select, Form, Input, Slider, Button,
    Upload, Icon, message, Table
} from 'antd'
import changeTitleHOC from '../../components/HOC/changeTitle'

import styles from './add.css'

const formItemLayout =  {
    labelCol: {span: 4},
    wrapperCol: {span: 20}
}

const columns = [
    { title: 'Id', dataIndex: 'ID' },
    { title: '名称', dataIndex: 'title' },
    { title: '分数', dataIndex: 'score' },
    { title: '所属学科', dataIndex: 'courses' }
]


@changeTitleHOC(true)
@connect(state => ({
    profile: state.profile,
    questions: state.questions.list,
    courses: state.global.courses
}), dispatch => ({
    getCourses() { return dispatch(getCourses()) },
    getQuestions() { return dispatch(getQuestions()) },
    addPaper(data) { return dispatch(addPaper(data)) }
}))
class AddExams extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            alert: '',
            // 可获得学分数量
            score: -1,
            hero: null,
            questions: [],
            courses: [],
            sourceQuestions: fromJS([])
        }
    }

    componentWillReceiveProps(p) {
        const sourceQuestions = fromJS(p.questions.map((item, index) => {
            item.key = index
            return item
        }))

        if (! is(this.state.sourceQuestions, sourceQuestions)) {
            this.setState({ sourceQuestions })
        }
    }

    componentDidMount() {
        this.props.getQuestions()
        this.props.getCourses()
        this.props.changeTitle('添加试卷')
    }

    handleFile = e => {
        this.setState({ hero: e.target.files[0] })
    }

    selectQuestions = selectedRowKeys => {
        this.setState({ questions: selectedRowKeys })
    }

    renderCourses() {
        return this.props.courses.map((course, index) => {
            return (
                <Select.Option key={index} value={course.ID}>{course.name}</Select.Option>
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const { title, alert, score, hero, courses } = this.state
        const questions = JSON.stringify(
            this.state.questions.map(q => this.state.sourceQuestions.getIn([q, 'ID']))
        )

        const coursesJSON = JSON.stringify(courses)

        if (
            title === '' ||
            alert === '' ||
            score === -1 ||
            (! hero) ||
            courses.length === 0 ||
            questions.length === 0
        ) {
            message.error('请填写完整内容')
            return
        }

        this.props.addPaper({
            title, alert, score, hero, questions,
            courses: coursesJSON
        }).then(() => {
            this.setState({ adding: false })
            message.success('添加考卷成功')
        }).catch(e => {
            this.setState({ adding: false })
            message.error('添加考卷失败')
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <Form layout="horizontal" onSubmit={this.onSubmit}>
                    <Form.Item label="标题">
                        <Input
                            type="text"
                            value={this.state.title}
                            placeholder="题目的标题"
                            onChange={e => {this.setState({ title: e.target.value})}}
                        />
                    </Form.Item>
                    <Form.Item label="警告">
                        <Input
                            type="text"
                            value={this.state.alert}
                            placeholder="题目的标题"
                            onChange={e => {this.setState({ alert: e.target.value})}}
                        />
                    </Form.Item>
                    <Form.Item label="学分">
                        <Slider min={0} max={10} onChange={v => this.setState({ score: v}) } />
                    </Form.Item>
                    <Form.Item label="图片">
                        <input type="file" accept="image/*" onChange={this.handleFile} />
                    </Form.Item>
                    <Form.Item>
                        <Table
                            rowSelection={{
                                selectedRowKeys: this.state.questions,
                                onChange: this.selectQuestions
                            }}
                            columns={columns}
                            dataSource={this.state.sourceQuestions.toJS()}
                        />
                    </Form.Item>
                    <Form.Item label="学科" {...formItemLayout}>
                        <Select
                            onChange={v => {this.setState({ courses: [v]})}}
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
        )
    }
}

export default AddExams

