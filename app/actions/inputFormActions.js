/**
 * Created by yangyang on 2017/7/1.
 */
import {createAction} from 'redux-actions'
import * as inputFormActionTypes from '../constants/inputFormActionTypes'

export const inputFormChanging = createAction(inputFormActionTypes.INPUTFORM_CHANGING)
export const inputFormOnChange = createAction(inputFormActionTypes.INPUTFORM_ON_CHANGE)
export const inputFormInitialize = createAction(inputFormActionTypes.INPUTFORM_INITIALIZED)
export const inputFormInit = createAction(inputFormActionTypes.INPUTFORM_INIT_STATE)
export const inputFormDestroyed = createAction(inputFormActionTypes.INPUTFORM_DESTROYED)
export const inputFormDestroy = createAction(inputFormActionTypes.INPUTFORM_DESTROY)
export const inputFormChecking = createAction(inputFormActionTypes.INPUTFORM_CHECKING)
export const inputFormCheck = createAction(inputFormActionTypes.INPUTFORM_VALID_CHECK)