import {
    VOTE_POST
} from './actions'

export function postReducer (state = {}, action) {
    switch (action.type) {
        case VOTE_POST:
            const { id, vote } = action;
            const  idx = state.postList.findIndex(obj => obj.id === id)
            return {
                ...state,
                postList: [
                    ...state.postList.slice(0, idx),
                    {
                        ...state.postList[idx],
                        vote
                    },
                    ...state.postList.slice(idx + 1)
                ]
            }
        default :
            return state;
    }
}