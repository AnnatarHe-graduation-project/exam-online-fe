/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.12.07
 */

import {
    FETCHING_PAPER,
    FETCHED_PAPER,
    FETCHED_PAPER_FAIL,
    FETCHED_QUESTION,

    NEXT_QUESTION,
    PREV_QUESTION,
    FINISHED_PAPER,

    PUSHING_SCORE,
    PUSHED_SCORE
} from './constants'

const fetchingPaper = () => {
    return {
        type: FETCHING_PAPER
    }
}

const fetchedPaper = paper => {
    return {
        type: FETCHED_PAPER,
        paper
    }
}

const fetchedQuestions = questions => {
    return {
        type: FETCHED_QUESTION,
        questions
    }
}

const fetchedPaperFail = err => {
    return {
        type: FETCHED_PAPER_FAIL,
        err
    }
}

export const fetchPaper = id => {
    return dispatch => {
        dispatch(fetchingPaper())
        return fetch(`/api/paper/${id}`)
            .then(res => res.json())
            .then(paper => {
                const questions = paper.questions
                delete paper.questions
                dispatch(fetchedPaper(paper))
                dispatch(fetchedQuestions(questions))
            })
            .catch(err => {
                dispatch(fetchedPaperFail(err))
            })
    }
}

