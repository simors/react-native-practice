/**
 * Created by yangyang on 2017/6/23.
 */
import {Map, List} from 'immutable'
import {REHYDRATE} from 'redux-persist/constants'
import {ConfigRecord} from '../models/configModel'

const initialState = ConfigRecord()

export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return onRehydrate(state, action)
    default:
      return state
  }
}

function onRehydrate(state, action) {
  var incoming = action.payload.CONFIG
  if (!incoming) return state

  return state
}