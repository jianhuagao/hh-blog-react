import { combineReducers } from 'redux-immutable'

import { reducer as homeReducer } from '../pages/home/store'


const cReducers = combineReducers({
  home: homeReducer
})

export default cReducers