import { combineReducers } from 'redux-immutable'

import { reducer as homeReducer } from '../pages/home/store'
import { reducer as blogReducer } from '../pages/blog/store'


const cReducers = combineReducers({
  home: homeReducer,
  blog:blogReducer
})

export default cReducers