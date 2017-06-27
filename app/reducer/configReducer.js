/**
 * Created by yangyang on 2017/6/23.
 */
import {Map, List} from 'immutable'
import {REHYDRATE} from 'redux-persist/constants'
import {ConfigRecord} from '../models/configModel'
import * as configActionTypes from '../constants/configActionTypes'

const initialState = ConfigRecord()

export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case configActionTypes.FETCH_DOMAIN_SUCCESS:
      return handleSaveDomain(state, action)
    case REHYDRATE:
      return onRehydrate(state, action)
    default:
      return state
  }
}

function handleSaveDomain(state, action) {
  let domain = action.payload.domain
  state = state.set('domain', domain)
  return state
}

function onRehydrate(state, action) {
  var incoming = action.payload.CONFIG
  if (!incoming) return state

  let domain = incoming.domain
  if (domain) {
    state = state.set('domain', domain)
  }

  return state
}