import { getAllPosts } from '../utils/contentAPI'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const UPDATE_POSTS = 'UPDATE_POSTS'


const initialState = {
  list: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case REQUEST_POSTS:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_POSTS:
      return {
        ...state,
        isLoading: false,
        list: action.posts
      }
    default:
      return state
  }
}

export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_POSTS
    })

    getAllPosts().then(
      res => dispatch({
        type: UPDATE_POSTS,
        posts: res
      })
    )

  }
}
