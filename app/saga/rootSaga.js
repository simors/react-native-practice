/**
 * Created by yangyang on 2017/6/23.
 */
import * as configActionTypes from '../constants/configActionTypes'
import { fork, takeEvery, take, takeLatest } from 'redux-saga/effects'
import {fetchDomainAction} from './configSaga'

export default function* rootSaga() {
  // while (true) {
  //   const {payload} = yield take(configActionTypes.FETCH_DOMAIN)
  //   yield fork(fetchDomainAction, payload)
  // }
  yield takeEvery(configActionTypes.FETCH_DOMAIN, fetchDomainAction)
}