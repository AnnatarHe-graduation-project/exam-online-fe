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

export const getArticles = () => {
    return dispatch => {
        return fetch('/api/news/articles')
            .then(res => res.json())
            .then(articles => {
                dispatch({type: ARTICLES_FETCHED_SUCCESSFULLY, articles})
                return articles
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export const getTrendings = () => {
    return dispatch => {
        return fetch('/api/news/trendings')
            .then(res => res.json())
            .then(trendings => {
                dispatch({type: TRENDING_FETCHED_SUCCESS, trendings})
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export const getOneArticle = id => {
    return dispatch => {
        return fetch(`/api/news/articles/${id}`)
            .then(res => res.json())
            .then(article => {
                dispatch({type: ONE_ARTICLE_FETCHED, article})
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export const addNews = data => {
    let fd = new FormData()
    Object.keys(data).forEach(item => {
        fd.append(item, data[item])
    })

    return fetch('/api/news', {
        method: 'POST',
        body: fd
    })
}
