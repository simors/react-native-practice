/**
 * Created by yangyang on 2017/6/23.
 */

import {combineReducers} from 'redux'
import configReducer from './configReducer'
import inputFormReducer from './inputFormReducer'

const rootReducers = combineReducers({
  CONFIG: configReducer,
  INPUTFORM: inputFormReducer,
})

const rootReducersWrapper = (state, action) => {
  action.rootState = state
  if (action.error) {
    return {
      ...state
    }
  } else {
    return rootReducers(state, action)
  }
}

export default rootReducersWrapper