import * as action from './constants'
import {
  getBanners
} from '@/service/home'

const changeTopBannersAction = (res) => {
  return {
    type: action.CHANGE_BANNERS,
    banners: res.rows
  }
}

export const getTopBannersAction = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(changeTopBannersAction(res))
    })
  }
}