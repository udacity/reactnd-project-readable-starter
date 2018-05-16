import { type } from '../actions'

export default function posts(state = [], action) {
  let posts = []
  switch(action.type){
    case type.GET_POSTS:
      return action.payload
    case type.ADD_POST:
      let added = state.slice()
      added.push(action.payload)
      return added
    case type.GET_POST:
      posts = []
      let found = false
      state.map((post) => {
        if(post.id === action.payload.id){
          found = true
          posts.push(action.payload)
        } else {
          posts.push(post)
        }
        return post
      })
      if( ! found ){
        posts.push(action.payload)
      }
      return posts
    case type.VOTE_POST:
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post
      })
    case type.DELETE_POST:
      return state.filter((post) => post.id !== action.payload.id).slice()
    case type.SORT_POSTS:
      let sorted = state.slice()
      sorted.sort(action.sortFunc)
      if( action.reverse )
        sorted.reverse()
      return sorted
    default:
      return state
  }
}
