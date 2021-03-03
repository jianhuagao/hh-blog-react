import { combineReducers } from 'redux-immutable'

import { reducer as homeReducer } from '../pages/home/store'
import { reducer as blogReducer } from '../pages/blog/store'
import { reducer as globalReducer } from '../global/store'


const cReducers = combineReducers({
  home: homeReducer,
  blog:blogReducer,
  global:globalReducer
})

export default cReducers