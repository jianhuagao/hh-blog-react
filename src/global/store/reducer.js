import { Map } from 'immutable'
import * as Type from './constants'
const defaultState = Map({
  website: []
})
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case Type.CHANGE_WEBSITE:
      return state.set("website", actions.website)
    default:
      return state
  }
}

export default reducer