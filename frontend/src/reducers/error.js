export default function error(state = false, action){
  if(action.payload && action.payload.error){
    return action.payload.error
  }
  return state
}
