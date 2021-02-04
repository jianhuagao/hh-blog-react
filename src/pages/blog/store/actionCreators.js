import * as action from './constants'
import {
  getBlogTypes,
  getBlogList,
  getBlog
} from '@/service/blog'

const changeBlogTypesAction = (res) => {
  return {
    type: action.CHANGE_BLOGTYPES,
    blogTypes: res
  }
}

export const getBlogTypesAction = () => {
  return dispatch => {
    getBlogTypes().then(res => {
      dispatch(changeBlogTypesAction(res))
    })
  }
}

const changeBlogListAction = (res) => {
  return {
    type: action.CHANGE_BLOGLIST,
    blogList: res
  }
}

export const getBlogListAction = (type) => {
  return dispatch => {
    getBlogList(type).then(res => {
      dispatch(changeBlogListAction(res))
    })
  }
}

const changeBlogAction = (res) => ({
  type: action.CHANGE_BLOG,
  blog: res
})

export const getBlogAction = (id) => {
  return dispatch => {
    getBlog(id).then(res => {
      dispatch(changeBlogAction(res))
    })
  }
}

export const changeBlogLoadingAction = (status) => {
  return dispatch => dispatch({
    type: action.CHANGE_BLOGLOADING,
    blogLoading: status
  })
}

export const changeBlogContentLoadingAction = (status) => {
  return dispatch => dispatch({
    type: action.CHANGE_BLOGCONTENTLOADING,
    blogContentLoading: status
  })
}

export const changeSelectBlogTypeAction = (status) => {
  return dispatch => dispatch({
    type: action.CHANGE_SELECTBLOGTYPE,
    selectBlogType: status
  })
}