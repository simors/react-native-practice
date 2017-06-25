/**
 * Created by yangyang on 2017/6/23.
 */
import {AsyncStorage} from 'react-native'
import {persistStore} from 'redux-persist'
import createFilter from 'redux-persist-transform-filter'
import immutableTransform from 'redux-persist-transform-immutable'
import configureStore from './configureStore'

const configFilter = createFilter('CONFIG', [])

export default function persist(store) {
  return persistStore(store, {
    storage: AsyncStorage,
    whitelist: ['CONFIG'],
    transforms: [configFilter]
  }, () => {
    // TODO: add function after rehydration is finished
  })
}

export const store = configureStore()
export const persistor = persist(store)