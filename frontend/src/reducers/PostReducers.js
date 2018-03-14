import { FETCH_POST, EDIT_POST, VOTE_POST, DELETE_POST } from '../actions/Constants'

const post = (state = [], action) => {
  const { id, updatedPost } = action

  switch(action.type) {
    case FETCH_POST:
      return action.post

    case EDIT_POST:
      return state.map(post => {
        if(post.id === id) {
          post = updatedPost
        }
        return post
      })

    case VOTE_POST:
      return state.map(post => {
              if (post.id === action.id) {
                if (action.option === "upVote") {
                  post.voteScore += 1
                }
                if (action.option === "downVote") {
                  post.voteScore -= 1
                }
              }
              return post
            })

    case DELETE_POST:
      return state.filter(post => post.id !== id)

    default:
      return state
  }
}

export default post
