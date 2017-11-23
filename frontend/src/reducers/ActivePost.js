export const REQUEST_POST = 'REQUEST_POST'
export const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POST'

export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const INCREMENT_VOTE = 'INCREMENT_VOTE'
export const DECREMENT_VOTE = 'DECREMENT_VOTE'

const initialState = {
}

export default (state=initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
