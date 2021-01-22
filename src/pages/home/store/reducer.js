import { Map } from 'immutable'
import * as Type from './constants'
const defaultState = Map({
  banners: [],
})
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case Type.CHANGE_BANNERS:
      return state.set("banners", actions.banners)
    default:
      return state
  }
}

export default reducer