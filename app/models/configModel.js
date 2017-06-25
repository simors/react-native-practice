/**
 * Created by yangyang on 2017/6/23.
 */
import {Map, List, Record} from 'immutable'

export const LocationRecord = Record({
  latitude: undefined,
  longitude: undefined,
  address: undefined,
  country: undefined,
  province: undefined,
  city: undefined,
  district: undefined,
  street: undefined,
  streetNumber: undefined,
}, 'LocationRecord')

export const ConfigRecord = Record({
  domain: undefined,
  appname: undefined,
  location: undefined,
}, "ConfigRecord")