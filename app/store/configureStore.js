/**
 * Created by yangyang on 2017/6/23.
 */
import {applyMiddleware, createStore, compose} from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import {createLogger} from 'redux-logger'
import {autoRehydrate} from 'redux-persist'
import rootReducer from '../reducer/rootReducer'
import rootSaga from '../saga/rootSaga'

const logger = createLogger({predicate: (getState, action) => __DEV__})
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initState) {
  const store = createStore(rootReducer,
                            initState,
                            compose(
                              applyMiddleware(sagaMiddleware, logger)
                              // autoRehydrate()
                            ))
  sagaMiddleware.run(rootSaga)
  store.close = () => store.dispatch(END)
  return store
}