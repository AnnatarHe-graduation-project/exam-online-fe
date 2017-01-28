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
    }

    componentDidMount() {
        const id = this.props.params.id
        this.props.getArticle(id)
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
                        <span className={styles.opinion}><i className="fa fa-lg fa-thumbs-o-up" /> {article.up}</span>
                        <span className={styles.opinion}><i className="fa fa-lg fa-thumbs-o-down" /> {article.down}</span>
                    </div>
                </div>
            </article>
        )
    }
}

export default Article
