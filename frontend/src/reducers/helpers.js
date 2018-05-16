export function slicePush(state, payload){
  let added = state.slice()
  added.push(payload)
  return added
}
export function mapUpdate(state, payload){
  let found = false
  let updated = state.map((item) => {
    if( item.id === payload.id ){
      found = true
      return payload
    } else {
      return item
    }
  })
  if( ! found ){
    updated.push(payload)
  }
  return updated
}
export function sliceFilter(state, payload){
  return state.filter((item) => item.id !== payload.id).slice()
}
