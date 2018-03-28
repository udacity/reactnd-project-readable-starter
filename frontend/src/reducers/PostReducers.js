import { FETCH_POST } from '../actions/Constants'

const post = (state = [], action) => {
  const { id, updatedPost } = action

  switch(action.type) {
    case FETCH_POST:
      return action.post

    default:
      return state
  }
}

export default post
