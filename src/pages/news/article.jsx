/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */

import React from 'react'
import { connect } from 'react-redux'
import Loading from '../../components/loading/loading'
import {
    getOneArticle
} from './actions'
import styles from './article.css'


@connect(state => ({
    article: state.news.article
}), dispatch => ({
    getArticle(id) { dispatch(getOneArticle(id)) }
}))
class Article extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            up: false,
            down: false
        }

        this.upThis = this.upThis.bind(this)
        this.downThis = this.downThis.bind(this)
    }

    componentDidMount() {
        const id = this.props.params.id
        this.props.getArticle(id)
    }

    upThis() {
        console.log('up')
        this.setState(s => ({ up: ! s.up }))
    }

    downThis() {
        this.setState(s => ({ down: ! s.down }))
    }
    render() {
        if (! this.props.article.id) {
            return <Loading />
        }
        const { article } = this.props
        return (
            <article className={styles.container}>
                <div className={styles.hero} style={{
                    backgroundImage: `url(${article.bg})`
                }}></div>
                {/* set dangour html here */}
                <div className={styles.content}>
                    <h2 className={styles.title}>{ article.title}</h2>
                    <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: article.content }} />
                    <div className={styles.extra}>
                        <span
                            className={styles.opinion + ' ' + (this.state.up ? styles.active : '')}
                            onClick={this.upThis}
                        >
                            <i className="fa fa-lg fa-thumbs-o-up" />
                            {~~article.up + (this.state.up ? 1 : 0)}
                        </span>
                        <span
                            className={styles.opinion + ' ' + (this.state.down ? styles.active : '')}
                            onClick={this.downThis}
                        >
                            <i className="fa fa-lg fa-thumbs-o-down" />
                            {~~article.down + (this.state.down ? 1 : 0)}
                        </span>
                    </div>
                </div>
            </article>
        )
    }
}

export default Article
