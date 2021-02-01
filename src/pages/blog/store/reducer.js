import { Map } from 'immutable'
import * as Type from './constants'
const defaultState = Map({
  blogTypes: [],
  blogList: [],
  blog: [],
})
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case Type.CHANGE_BLOGTYPES:
      return state.set("blogTypes", actions.blogTypes)
    case Type.CHANGE_BLOGLIST:
      return state.set("blogList", actions.blogList)
    case Type.CHANGE_BLOG:
      return state.set("blog", actions.blog)
    default:
      return state
  }
}

export default reducer