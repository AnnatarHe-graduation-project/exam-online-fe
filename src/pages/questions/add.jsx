/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017.03.05
 */

import React from 'react'
import { Button } from 'le-theme'
import { fromJS } from 'immutable'
import { Select } from 'antd'
import HommilyEditor from 'HommilyEditor'
import styles from './add.css'

class AddQuestion extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            answers: fromJS({}),
            correct: fromJS([]),
            score: 0,
            courses: 0
            // courses: fromJS([])
        }
    }

    submit = e => {
        e.preventDefault()
        const content = this.editor.saveHandle()
    }

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.excelContainer}>
                    <Button type="error" size="large" radius="radius">使用Excel加载数据</Button>
                </div>
                <hr className={styles.hr} />
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={this.submit}>
                        <div className={styles.control}>
                            <input
                                className={styles.titleInput}
                                onChange={e => {this.setState({ title: e.target.value})}}
                                type="text"
                            />
                        </div>
                        <div className={styles.control}>
                            <HommilyEditor
                                ref={editor => { this.editor = editor }}
                                uploadImg={() => {}}
                            />
                        </div>
                        <div className={styles.control}>
                            <input
                                className={styles.answers}
                            />
                        </div>
                        
                        <div className={styles.control}>
                            <input
                                className={styles.score}
                            />
                        </div>
                        <div className={styles.control}>
                            <Select
                                style={{ width: 120 }}
                                onChange={v => {this.setState({ courses: v})}}
                            >
                                <Select.Option value="0">生物学</Select.Option>
                            </Select>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddQuestion

