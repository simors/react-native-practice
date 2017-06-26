/**
 * Created by yangyang on 2017/6/26.
 */
import { call, put } from 'redux-saga/effects'
import {fetchDomain} from '../api/config'
import {requestDomainSuccess} from '../actions/configActions'

export function* fetchDomainAction(payload) {
  let domain = yield call(fetchDomain, payload)
  yield put(requestDomainSuccess({domain}))
}