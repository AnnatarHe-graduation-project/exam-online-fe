/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 25/01/2017
 */

import {
    ARTICLES_FETCHED_SUCCESSFULLY,
    TRENDING_FETCHED_SUCCESS,
    ONE_ARTICLE_FETCHED
} from './constants'

const initial = {
    articles: [],
    article: {},
    trendings: []
}

const newsReducer = (state = initial, action) => {
    switch (action.type) {
        case ARTICLES_FETCHED_SUCCESSFULLY:
            return Object.assign({}, state, {
                articles: action.articles
            })
        case TRENDING_FETCHED_SUCCESS:
            return Object.assign({}, state, {
                trendings: action.trendings
            })
        case ONE_ARTICLE_FETCHED:
            return Object.assign({}, state, {
                article: action.article
            })
        default:
            return state
    }
}

export default newsReducer


