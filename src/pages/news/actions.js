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
        return fetch('/api/news/list')
            .then(res => res.json())
            .then(res => {
                dispatch({type: ARTICLES_FETCHED_SUCCESSFULLY, articles: res.data})
                return res.data
            })
            .catch(err => { console.error(err) })
    }
}

export const getTrendings = () => {
    return dispatch => {
        return fetch('/api/news/trendings')
            .then(res => res.json())
            .then(res => {
                dispatch({type: TRENDING_FETCHED_SUCCESS, trendings: res.data})
                return res.data
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export const getOneArticle = id => {
    return dispatch => {
        return fetch(`/api/news/${id}`)
            .then(res => res.json())
            .then(res => {
                dispatch({type: ONE_ARTICLE_FETCHED, article: res.data})
            })
            .catch(err => { console.error(err) })
    }
}

export const addNews = data => {
    let fd = new FormData()
    Object.keys(data).forEach(item => {
        fd.append(item, data[item])
    })
    return dispatch => {
        return fetch('/api/news/add', {
            method: 'POST',
            body: fd
        })
    }
}
