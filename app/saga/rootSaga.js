/**
 * Created by yangyang on 2017/6/23.
 */
import { all } from 'redux-saga/effects'
import {configSaga} from './configSaga'
import {inputFormSaga} from './inputFormSaga'

export default function* rootSaga() {
  yield all([
    ...configSaga,
    ...inputFormSaga,
  ])
}