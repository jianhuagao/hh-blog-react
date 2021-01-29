import { Map } from 'immutable'
import * as Type from './constants'
const defaultState = Map({
  blogTypes: [],
})
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case Type.CHANGE_BLOGTYPES:
      return state.set("blogTypes", actions.blogTypes)
    default:
      return state
  }
}

export default reducer