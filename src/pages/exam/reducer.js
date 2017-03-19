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
import { GOT_EXAMS } from '../public/constants/exams'
const init = {
    loading: true,
    // 只有在最后一页面才会用到pushing
    pushing: false,
    // 当前问题的id
    current: 0,
    err: null,
    paper: {
        id: 0,
        title: '',
        alert: '',
        score: '',
        hero: ''
    },
    questions: [],
    exams: [{id: -1, title: '', desc: '', image: ''}]
}

const examReducer = (state = init, action) => {
    switch (action.type) {
        case FETCHING_PAPER:
            return state
        case FETCHED_PAPER:
            return Object.assign({}, state, {
                loading: false,
                paper: action.paper
            })
        case FETCHED_QUESTION:
            return Object.assign({}, state, { questions: action.questions })
        case PUSHING_SCORE:
            return Object.assign({}, state, { pushing: true })
        case PUSHED_SCORE:
            return Object.assign({}, state, { pushing: false })
        case NEXT_QUESTION:
            return Object.assign({}, state, {
                current: state.current + 1
            })
        case PREV_QUESTION:
            return Object.assign({}, state, {
                current: state.current - 1
            })
        case FINISHED_PAPER:
            return Object.assign({}, state, {
                current: 999
            })
        case FETCHED_PAPER_FAIL:
            return Object.assign({}, state, {
                err: action.err
            })
        case GOT_EXAMS:
            return Object.assign({}, state, {
                exams: action.exams
            })
        default:
            return state
    }
}

export default examReducer
