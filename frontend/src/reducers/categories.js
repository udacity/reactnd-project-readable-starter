import { type } from '../actions'

export default function categories(state = [], action){
  switch(action.type){
    case type.GET_CATEGORIES:
      return action.payload.categories
    default:
      return state
  }
}
