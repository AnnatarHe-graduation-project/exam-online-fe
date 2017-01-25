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
        const id = this.props.routing.pathname
        this.props.getArticle(id)
    }
    render() {
        if (! this.props.article.id) {
            return <Loading />
        }
        return (
            <article className={styles.container}>
                <div className={styles.hero} style={{
                    backgroundImage: this.props.article.hero
                }}></div>
                {/* set dangour html here */}
                <div className={styles.content}>
                </div>
            </article>
        )
    }
}

export default Article
