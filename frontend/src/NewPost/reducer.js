import {
    CREATE_POST
} from './actions'

export function newPostReducer (state = {}, actionData) {
    switch (action.type) {
        case CREATE_POST:
            const { post } = actionData;
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