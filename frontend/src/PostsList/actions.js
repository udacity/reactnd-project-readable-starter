export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function addPost ({title, body, author, category}) {
    return {
        type: ADD_POST,
        newPost: {
            timestamp: new Date().getTime(),
            title,
            body,
            author,
            category,
            voteScore: 0,
            deleted: false,
            commentCount: 0
        }        
    }
}

export function removePost ({id}) {
    return {
        type: REMOVE_POST,
        id
    }
}