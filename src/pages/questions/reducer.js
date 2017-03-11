import {
    QUESTIONS_GOT
} from './constants'

const init = {
    list: []
}

const questionReducer = (state = init, action) => {
    switch (action.type) {
        case QUESTIONS_GOT:
            return Object.assign({}, state, {
                list: action.questions
            })
        default:
            return state
    }
}

export default questionReducer
