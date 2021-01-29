import * as action from './constants'
import {
  getBlogTypes
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