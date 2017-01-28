/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */

import React from 'react'
import { connect } from 'react-redux'
import Loading from '../../components/loading/loading'
import ArticleItem from './item'
import Trending from './trending'
import Cards from '../../components/cards/cards'
import styles from './news.css'
import {
    getArticles,
    getTrendings
} from './actions'

@connect(state => ({
    articles: state.news.articles,
    trendings: state.news.trendings
}))
class News extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getArticles())
        this.props.dispatch(getTrendings())
    }

    articleItemRender() {
        return this.props.articles.map(
                (article, index) => <ArticleItem key={index} id={article.id} title={article.title} img={article.bg} />
            )
    }
    render() {
        if (this.props.articles.length <= 0 || this.props.trendings <= 0) {
            return <Loading />
        }
        return (
            <section>
                <Cards className={styles.newsCardContainer}>
                    { this.articleItemRender() }
                </Cards>
                <Trending lists={this.props.trendings} />
            </section>
        )
    }
}

export default News
