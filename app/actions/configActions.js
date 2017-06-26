/**
 * Created by yangyang on 2017/6/26.
 */
import {createAction} from 'redux-actions'
import * as configActionTypes from '../constants/configActionTypes'

export const requestDomain = createAction(configActionTypes.FETCH_DOMAIN)
export const requestDomainSuccess = createAction(configActionTypes.FETCH_DOMAIN_SUCCESS)