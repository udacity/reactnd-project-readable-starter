import { FETCH_POSTS, ADD_NEW_POST, SORT_POSTS, EDIT_POST, VOTE_POST, DELETE_POST} from '../actions/Constants'
import sortBy from 'sort-by'

const posts = (state = [], action) => {
  const { posts, post, value, id, updatedPost } = action

  switch(action.type) {
    case FETCH_POSTS:
      return posts.filter(post => !(post.deleted))


    case ADD_NEW_POST:
      return state.concat([post])

    case SORT_POSTS:
      return [].concat(state.sort(sortBy("-"+value)))

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

export default posts
