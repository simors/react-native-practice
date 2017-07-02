/**
 * Created by yangyang on 2017/7/1.
 */
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as inputFormActionTypes from '../constants/inputFormActionTypes'
import * as inputFormAction from '../actions/inputFormActions'

export function* initInputForm(action) {
  let payload = action.payload
  yield put(inputFormAction.inputFormInit({...payload}))
}

export function* inputFormUpdate(action) {
  let payload = action.payload
  yield put(inputFormAction.inputFormOnChange({...payload}))
}

export function* inputFormOnDestroy(action) {
  let payload = action.payload
  yield put(inputFormAction.inputFormDestroy({...payload}))
}

export const inputFormSaga = [
  takeEvery(inputFormActionTypes.INPUTFORM_INITIALIZED, initInputForm),
  takeEvery(inputFormActionTypes.INPUTFORM_CHANGING, inputFormUpdate),
  takeEvery(inputFormActionTypes.INPUTFORM_DESTROYED, inputFormOnDestroy)
]