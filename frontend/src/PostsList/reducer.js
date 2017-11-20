import {
    ADD_POST,
    REMOVE_POST
} from './actions'

export function postsList (state = [], action) {
    switch (action.type) {
        case ADD_POST:
            const { newPost } = action;
            debugger
            state.push(newPost);
            return state;
        case REMOVE_POST:
            const { id } = action;
            const  idx = state.findIndex(obj => obj.id === id)
            return {
                postList: [
                    state.splice(idx,1)
                ]
            }
        default :
            return state;
    }
}