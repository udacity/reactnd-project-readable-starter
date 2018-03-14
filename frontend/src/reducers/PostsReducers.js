import { FETCH_POSTS, FETCH_CATEGORIES_POSTS, ADD_NEW_POST, SORT_POSTS } from '../actions/Constants'
import sortBy from 'sort-by'

const posts = (state = [], action) => {
  const { posts, post, value } = action

  switch(action.type) {
    case FETCH_POSTS:
      return posts.filter(post => !(post.deleted))

    case FETCH_CATEGORIES_POSTS:
      return posts.filter(post => !(post.deleted))

    case ADD_NEW_POST:
      return state.concat([post])

    case SORT_POSTS:
      return [].concat(state.sort(sortBy("-"+value)))



    default:
      return state
  }
}

export default posts
