import { Map } from 'immutable'
import * as Type from './constants'
const defaultState = Map({
  blogTypes: [],
  blogList: [],
  blog: [],
  blogLoading: false,
  blogContentLoading: false,
})
function reducer(state = defaultState, actions) {
  switch (actions.type) {
    case Type.CHANGE_BLOGTYPES:
      return state.set("blogTypes", actions.blogTypes)
    case Type.CHANGE_BLOGLIST:
      return state.set("blogList", actions.blogList)
    case Type.CHANGE_BLOG:
      return state.set("blog", actions.blog)
    case Type.CHANGE_BLOGLOADING:
      return state.set("blogLoading", actions.blogLoading)
    case Type.CHANGE_BLOGCONTENTLOADING:
      return state.set("blogContentLoading", actions.blogContentLoading)
    default:
      return state
  }
}

export default reducer