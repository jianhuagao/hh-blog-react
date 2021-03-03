import * as action from './constants'
import {
  getWebsite
} from '@/service/website'

const changeWebsiteAction = (res) => {
  return {
    type: action.CHANGE_WEBSITE,
    website: res.rows
  }
}

export const getWebsiteAction = () => {
  return dispatch => {
    getWebsite().then(res => {
      dispatch(changeWebsiteAction(res))
    })
  }
}