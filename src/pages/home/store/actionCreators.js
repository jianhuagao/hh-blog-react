import * as action from './constants'
import {
  getBanners,
  getAreas
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


const changeAreasAction = (res) => {
  return {
    type: action.CHANGE_AREAS,
    areas: res.rows
  }
}

export const getAreasAction = () => {
  return dispatch => {
    getAreas().then(res => {
      dispatch(changeAreasAction(res))
    })
  }
}