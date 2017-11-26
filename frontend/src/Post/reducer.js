import {
    VOTE_POST
} from './actions'

export function postReducer (state = {}, action) {
    switch (action.type) {
        case VOTE_POST:
            return {
                ...state,
            }
        default :
            return state;
    }
}