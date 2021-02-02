import { Map } from 'immutable'
import * as Type from './constants'
const defaultState = Map({
  banners: [],
  areas: [],
})
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case Type.CHANGE_BANNERS:
      return state.set("banners", actions.banners)
    case Type.CHANGE_AREAS:
      return state.set("areas", actions.areas)
    default:
      return state
  }
}

export default reducer